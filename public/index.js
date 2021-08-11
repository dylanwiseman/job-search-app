const { adzunaID, adzunaKey } = adzunaConfig;
const URLs = {
  adzunaBaseURL: `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=50&`,
  adzunaURLEnd: `&what_exclude=senior%20manager%20sr%20principal%20&max_days_old=30&salary_include_unknown=1&full_time=1&permanent=1`,
  adzunaWebDevURL: `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=50&what_phrase=web%20developer&what_exclude=senior%20manager%20sr%20principal%20&max_days_old=30&salary_include_unknown=1&full_time=1&permanent=1`,
  adzunaJavascriptURL: `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=50&what=javascript&what_exclude=senior%20manager%20sr%20principal%20java%20&max_days_old=30&salary_include_unknown=1&full_time=1&permanent=1`,
  adzunaPythonURL: `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=50&what=python&what_exclude=senior%20manager%20sr%20principal%20&max_days_old=30&salary_include_unknown=1&full_time=1&permanent=1`,
  adzunaJavaURL: `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=50&what=Java&what_exclude=senior%20manager%20sr%20principal%20&max_days_old=30&salary_include_unknown=1&full_time=1&permanent=1`,
  adzunaFullStackURL: `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=50&what_phrase=full%20stack&what_exclude=senior%20manager%20sr%20principal%20&max_days_old=30&salary_include_unknown=1&full_time=1&permanent=1`,
  adzunaFrontEndURL: `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=50&what=frontend&what_exclude=senior%20manager%20sr%20principal%20&max_days_old=30&salary_include_unknown=1&full_time=1&permanent=1`,
  adzunaBackEndURL: `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=50&what=backend&what_exclude=senior%20manager%20sr%20principal%20&max_days_old=30&salary_include_unknown=1&full_time=1&permanent=1`,
  adzunaSoftwareEngineerURL: `$https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=50&what_phrase=software%20engineer&what_exclude=senior%20manager%20sr%20principal%20&max_days_old=30&salary_include_unknown=1&full_time=1&permanent=1`,
};
let container = document.getElementById("job-list");

const showWebDevJobs = () => {
  axios
    .get(`${URLs.adzunaWebDevURL}`)
    .then((res) => {
      createJobCards(res);
    })
    .catch((err) => console.log("Error: " + err));
};

const showJavascriptJobs = () => {
  axios
    .get(`${URLs.adzunaJavascriptURL}`)
    .then((res) => {
      createJobCards(res);
    })
    .catch((err) => console.log("Error: " + err));
};

const createJobCards = (res) => {
  container.innerHTML = "";
  console.log("createJobsFunction!");
  res.data.results.map((job) => {
    let jobCard = document.createElement("div");
    let jobTitle = document.createElement("h3");
    let company = document.createElement("h4");
    let description = document.createElement("p");
    let link = document.createElement("a");
    jobCard.classList.add("job-card");
    jobTitle.textContent = job.title;
    company.textContent = job.company.display_name;
    description.textContent = job.description;
    link.href = job.redirect_url;
    link.textContent = "link";
    // console.log(jobTitle.textContent, company.textContent);
    container.appendChild(jobCard);
    jobCard.appendChild(jobTitle);
    jobCard.appendChild(company);
    jobCard.appendChild(description);
    jobCard.appendChild(link);
  });
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
