import React, { useState } from "react";

const Contests = () => {
  const [value, setValue] = useState("all");
  const [checked, setChecked] = useState(false);
  const [contest] = useState([
    {
      name: "starters 1",
      start_time: "2024-05-03 09:00:00",
      end_time: "2024-05-03 11:00:00",
      site: "Codeforces",
      in_24_hours: "No",
      url: "https://www.example.com/contest1",
    },
    {
      name: "cook off",
      start_time: "2024-05-04 10:00:00",
      end_time: "2024-05-04 12:00:00",
      site: "CodeChef",
      in_24_hours: "Yes",
      url: "https://www.example.com/contest2",
    },
    {
      name: "long challenge",
      start_time: "2024-05-05 11:00:00",
      end_time: "2024-05-05 13:00:00",
      site: "CodeChef",
      in_24_hours: "No",
      url: "https://www.example.com/contest3",
    },
    {
      name: "weekly contest",
      start_time: "2024-05-06 12:00:00",
      end_time: "2024-05-06 14:00:00",
      site: "LeetCode",
      in_24_hours: "Yes",
      url: "https://www.example.com/contest4",
    },
    {
      name: "monthly contest",
      start_time: "2024-05-07 13:00:00",
      end_time: "2024-05-07 15:00:00",
      site: "CodeChef",
      in_24_hours: "No",
      url: "https://www.example.com/contest5",
    },
    {
      name: "contest 6",
      start_time: "2024-05-08 14:00:00",
      end_time: "2024-05-08 16:00:00",
      site: "AtCoder",
      in_24_hours: "Yes",
      url: "https://www.example.com/contest6",
    },
    {
      name: "contest 7",
      start_time: "2024-05-09 15:00:00",
      end_time: "2024-05-09 17:00:00",
      site: "CodeForces",
      in_24_hours: "No",
      url: "https://www.example.com/contest7",
    },
    {
      name: "contest 8",
      start_time: "2024-05-10 16:00:00",
      end_time: "2024-05-10 18:00:00",
      site: "TopCoder",
      in_24_hours: "Yes",
      url: "https://www.example.com/contest8",
    },
    {
      name: "contest 9",
      start_time: "2024-05-11 17:00:00",
      end_time: "2024-05-11 19:00:00",
      site: "Kick Start",
      in_24_hours: "No",
      url: "https://www.example.com/contest9",
    },
    {
      name: "contest 10",
      start_time: "2024-05-12 18:00:00",
      end_time: "2024-05-12 20:00:00",
      site: "CodeChef",
      in_24_hours: "Yes",
      url: "https://www.example.com/contest10",
    },
  ]);

  function handleChange(e) {
    if (e.target.value === "none") {
      setValue("all");
    } else {  
      setValue(e.target.value);
    }
  }

  function handleCheck(e) {
    setChecked(!checked);
  }

  const GetContests = () => {
    return (
      <>
        {contest.map((c, index) => {
          return checked ? (
            c.in_24_hours === "Yes" && (
              <tr key={index}>
                <td>
                  <a href={c.url} target="_blank" rel="noreferrer">
                    {c.name}
                  </a>
                </td>
                <td>{c.start_time}</td>
                <td>{c.end_time}</td>
                {c.site && <td>{c.site}</td>}
                <td>{c.in_24_hours}</td>
              </tr>
            )
          ) : (
            <tr key={index}>
              <td>
                <a href={c.url} target="_blank" rel="noreferrer">
                  {c.name}
                </a>
              </td>
              <td>{c.start_time}</td>
              <td>{c.end_time}</td>
              {c.site && <td>{c.site}</td>}
              <td>{c.in_24_hours}</td>
            </tr>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="form-group">
        <select
          placeholder="Select Platform"
          onChange={handleChange}
          value={value}
          className="form-control"
        >
          <option value="hacker_rank">HackerRank</option>
          <option value="hacker_earth">HackerEarth</option>
          <option value="code_chef">CodeChef</option>
          <option value="leet_code">LeetCode</option>
          <option value="at_coder">AtCoder</option>
          <option value="codeforces">CodeForces</option>
          <option value="top_coder">TopCoder</option>
          <option value="kick_start">Kick Start</option>
          <option value="none">None</option>
        </select>
        <input
          type="checkbox"
          className="form-check-input my-4 ms-4"
          isChecked={checked}
          onChange={handleCheck}
        />
        <label className="my-4 mx-2">In 24 hours?</label>
      </div>
      <div>
        <div className="table-responsive">
          <table className="table table-striped table-bordered zero-configuration">
            <thead>
              <tr>
                <th>Name</th>
                <th>Start</th>
                <th>End</th>
                {value === "all" && <th>Site</th>}
                <th>In 24 hours</th>
              </tr>
            </thead>
            <tbody>
              <GetContests />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contests;
