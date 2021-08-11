// const { default: axios } = require("axios");

const { adzunaID, adzunaKey } = adzunaConfig;
const URLs = {
  adzunaBaseURL: `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=50&`,
  adzunaURLEnd: `&what_exclude=senior%20manager%20sr%20principal%20&max_days_old=30&salary_include_unknown=1&full_time=1&permanent=1`,
  adzunaWebDevURL: `${this.adzunaBaseURL}what_phrase=web%20developer${this.adzunaURLEnd}`,
  adzunaJavascriptURL: `${this.adzunaBaseURL}what=javascript${this.adzunaURLEnd}`,
  adzunaPythonURL: `${this.adzunaBaseURL}what=python${this.adzunaURLEnd}`,
  adzunaJavaURL: `${this.adzunaBaseURL}what=Java${this.adzunaURLEnd}`,
  adzunaFullStackURL: `${this.adzunaBaseURL}what_phrase=full%20stack${this.adzunaURLEnd}`,
  adzunaFrontEndURL: `${this.adzunaBaseURL}what=frontend${this.adzunaURLEnd}`,
  adzunaBackEndURL: `${this.adzunaBaseURL}what=backend${this.adzunaURLEnd}`,
  adzunaSoftwareEngineerURL: `${this.adzunaBaseURL}what_phrase=software%20engineer${this.adzunaURLEnd}`,
};

const showWebDevJobs = () => {
  console.log("working");
  axios
    .get(`${URLs.adzunaWebDevURL}`)
    .then((res) => {
      console.log("retrieved");
      res.data.results.map((job) => {
        console.log(job.title, job.company.display_name);
      });
      //   console.log(res.data.results);
    })
    .catch((err) => console.log("Error: " + err));
};

const showJavascriptJobs = () => {
  axios
    .get(`${URLs.adzunaJavascriptURL}`)
    .then((res) => {
      res.data.results.map((job) => {
        console.log(job.title, job.company.display_name);
      });
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
