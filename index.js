const reviews = [
    {
      id: 1,
      name: "Ashok",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt mollitia, rem officiis itaque modi atque odit sequi eius aliquid.",
    },
    {
      id: 2,
      name: "John",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt mollitia, rem officiis itaque modi atque odit sequi eius aliquid.",
    },
    {
      id: 3,
      name: "Ashu",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt mollitia, rem officiis itaque modi atque odit sequi eius aliquid.",
    },
    {
      id: 4,
      name: "Sahil",
      job: "Sales",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "   4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt mollitia, rem officiis itaque modi atque odit sequi eius aliquid.",
    },
  ];


  // Select items

  const img = document.getElementById('person-img');
  const author = document.getElementById('Author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');


// set starting item
let currentItem = 0;

// load initial item

window.addEventListener('DOMContentLoaded', function () {

    const items = reviews [currentItem];

    img.src = items.img;
    author.textContent = items.name;
    job.textContent = items.job;
    info.textContent = items.text;
    
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  
