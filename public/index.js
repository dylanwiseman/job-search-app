// const { adzunaID, adzunaKey } = adzunaConfig;
require("dotenv").config();
import { keys } from "../server/configs.js";
const { API_KEY, API_ID } = process.env;
const adzunaID = API_ID;
const adzunaKey = API_KEY;

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
const buttonsArray = document.querySelectorAll("button");
const loader = document.getElementById("loading");

const showJobs = (event) => {
  console.log("clicked");
  loader.style.display = "block";
  let endpoint = "";
  let targetBtn = event.target.textContent.trim();
  if (targetBtn === "Web Development") {
    endpoint = URLs.adzunaWebDevURL;
  } else if (targetBtn === "Javascript") {
    endpoint = URLs.adzunaJavascriptURL;
  } else if (targetBtn === "Front End") {
    endpoint = URLs.adzunaFrontEndURL;
  } else if (targetBtn === "Full Stack") {
    endpoint = URLs.adzunaFullStackURL;
  } else if (targetBtn === "Back End") {
    endpoint = URLs.adzunaBackEndURL;
  } else if (targetBtn === "Python") {
    endpoint = URLs.adzunaPythonURL;
  } else if (targetBtn === "Java") {
    endpoint = URLs.adzunaJavaURL;
  } else {
    console.log("WTF?");
  }
  axios
    .get(endpoint)
    .then((res) => {
      createJobCards(res);
      loader.style.display = "none";
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
    link.target = "_blank";
    link.textContent = "view job posting =>";
    container.appendChild(jobCard);
    jobCard.appendChild(jobTitle);
    jobCard.appendChild(company);
    jobCard.appendChild(description);
    jobCard.appendChild(link);
  });
};

const setEventListeners = () => {
  [...buttonsArray].map((i) => i.addEventListener("click", showJobs));
};

setEventListeners();

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
