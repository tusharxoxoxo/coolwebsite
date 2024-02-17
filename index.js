document.addEventListener("DOMContentLoaded", () => {
    const whoamiSpan = document.getElementById("whoami");
    const cursorSpan = document.getElementById("cursor");
  
    const jobs = [
      "Novice Malware Analyst",
      "Novice System Administrator",
      "Novice Game Developer",
      "Intermidiate Pixel Artist"
    ];
  
    let i = 0;
    let j = 0;
    let isDeleting = false;
    let speed = 100;
  
    function type() {
      const job = jobs[i % jobs.length];
  
      if (!isDeleting) {
        whoamiSpan.textContent = "$ whoami: " + job.substring(0, j);
        cursorSpan.style.display = "inline-block";
      } else {
        whoamiSpan.textContent = "$ whoami: " + job.substring(0, j) + "_";
        cursorSpan.style.display = "none";
      }
  
      if (!isDeleting && j === job.length) {
        setTimeout(() => {
          isDeleting = true;
          speed = 25;
        }, 2500); // wait for 2.5 seconds before deleting
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i++;
        speed = 100;
        setTimeout(() => {
          speed = 100;
        }, 500); // wait for half a second before typing again
      }
  
      j += isDeleting ? -1 : 1;
  
      setTimeout(type, speed);
    }
  
    type();
  });
  