const { adzunaID, adzunaKey } = adzunaConfig;
const adzunaURL = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=50&what=web%20developer&what_exclude=senior%20manager%20sr%20principal%20&max_days_old=30&salary_include_unknown=1&full_time=1&permanent=1`;

const showJobs = () => {
  console.log("working");
  axios
    .get(`${adzunaURL}`)
    .then((res) => {
      console.log("retrieved");
      res.data.results.map((job) => {
        console.log(job.title, job.company.display_name);
      });
      //   console.log(res.data.results);
    })
    .catch((err) => console.log("Error: " + err));
};

// Tried using async/await:

// async function getJobs() {
//   console.log("clicked");
//   await Promise.all([
//     async () => {
//       const { data } = await axios.get(`${adzunaURL}`);
//       console.log(data);
//     },
//   ]);
// }
