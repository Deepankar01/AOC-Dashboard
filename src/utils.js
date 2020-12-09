import data from "./data/data.json";
import jsonata from "jsonata";

const get_global_score_data = () =>
  jsonata("$distinct(members.*.global_score)").evaluate(data);

const get_day_group = (x_y_split) => {
  const date_group = {};
  const date_time_slot_group = {};
  x_y_split.forEach(
    ({ x, y }) => (date_group[x] = date_group[x] ? [...date_group[x], y] : [y])
  );
  for (const [key, value] of Object.entries(date_group)) {
    const time_group = {};
    Array(24)
      .fill(0)
      .map((_, i) => i + 1)
      .forEach((item) => (time_group[item] = 0));

    // const get_difference = (item2) => {
    //   const difference = {};
    //   Array(24)
    //     .fill(0)
    //     .map((_, i) => i + 1)
    //     .forEach(
    //       (item, index) =>
    //         (difference[item] = moment(item2, "HH:mm:ss").diff(
    //           moment(`${index}:00:00`, "HH:mm:ss")
    //         ))
    //     );
    //   return difference;
    // };

    value.forEach((item) => {
      let time_slot = item.split(":")[0];
      //   const differences = get_difference(item);
      //   debugger;

      //   if (differences.with00 >= 0 && differences.with1029am <= 0) {
      //     time_slot = "morning 12-10:30am";
      //   } else if (differences.with1030am >= 0 && differences.with1159am <= 0) {
      //     time_slot = "afternoon 10:30am-12:00";
      //   } else if (differences.with1200 >= 0 && differences.with100pm <= 0) {
      //     time_slot = "afternoon 12:00am-12:00";
      //   } else if (differences.with3pm >= 0 && differences.with759pm <= 0) {
      //     time_slot = "evening 3pm-8pm";
      //   } else if (differences.with8pm >= 0 && differences.with1159pm <= 0) {
      //     time_slot = "night 8pm-12";
      //   }
      time_group[time_slot] = isNaN(time_group[time_slot])
        ? 1
        : time_group[time_slot] + 1;
    });

    date_time_slot_group[key] = time_group;
  }
  return date_time_slot_group;
};

const get_part1_times = () => {
  const query_response = jsonata(
    '$map(members.*.completion_day_level.*."1".get_star_ts, function($v, $i, $a) { $fromMillis($number($pad($v, 13,"0")),"[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01]","+0530") })'
  ).evaluate(data);
  const query_response2 = jsonata(
    '$map(members.*.completion_day_level.*."2".get_star_ts, function($v, $i, $a) { $fromMillis($number($pad($v, 13,"0")),"[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01]","+0530") })'
  ).evaluate(data);
  const x_y_split = [...query_response, ...query_response2].map((i) => {
    const d = i.split("T")[0];
    const t = i.split("T")[1];
    return { x: d, y: t };
  });

  return x_y_split;
};

const get_quickest_solution = () => {
  const query = jsonata(`
  members.*{\`id\`:{"name":name,"day_time_diff":$sort($map(completion_day_level,function($v, $i, $a){
    $map($keys($v), function($va,$ia,$aa){ 
                $number($pad($lookup($lookup($lookup(completion_day_level,$va),"2"),"get_star_ts"),13,'0'))-
                $number($pad($lookup($lookup($lookup(completion_day_level,$va),"1"),"get_star_ts"),13,'0'))
                
                    
        })
        
    }
    ))[0]}}
  `).evaluate(data);
  return Object.values(query)
    .sort(function (a, b) {
      return a["day_time_diff"] - b["day_time_diff"];
    })
    .slice(0, 5)
    .map(({ name, day_time_diff }) => `${name} (${day_time_diff / 1000} sec)`);
};

export {
  get_global_score_data,
  get_part1_times,
  get_day_group,
  get_quickest_solution,
};
