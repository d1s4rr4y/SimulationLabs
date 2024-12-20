var headings = Array.from(document.getElementsByTagName("h3"));
const aside = document.querySelector("aside");
const ul = document.createElement("ul");
aside.appendChild(ul);

headings = Array.from(headings).slice(1);

headings.map((heading) => {
    const id = heading.innerText.toLowerCase().replaceAll(" ", "_");
    heading.setAttribute("id", id);
    const anchorElement = `<a href="#${id}">${heading.textContent}</a>`;
    const keyPointer = `<li>${anchorElement}</li>`;
    ul.insertAdjacentHTML("beforeend", keyPointer);
});
const tocAnchors = aside.querySelectorAll("a");
const obFunc = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const index = headings.indexOf(entry.target);
            tocAnchors.forEach((tab) => {
                tab.classList.remove("active");
            });
            tocAnchors[index].classList.add("active");
            tocAnchors[index].scrollIntoView({
                block: "nearest",
                inline: "nearest"
            });
        }
    });
};
const obOption = {
    rootMargin: "-30px 0% -77%",
    threshold: 1
};
const observer = new IntersectionObserver(obFunc, obOption);
headings.forEach((hTwo) => observer.observe(hTwo));