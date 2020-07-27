const ulSquares = document.querySelector("ul.squares");

for(let i = 0; i < 5; i++){
  const li = document.createElement("li");
  li.className = 'up';
  const li2 = document.createElement("li");
  li2.className = 'down';

  const random = (min, max) => Math.random() * (max - min) + min;
  
  let size = Math.floor(random(20, 100));
  
  li.style.width = `${size}px`;
  li.style.height = `${size}px`;

  size = Math.floor(random(20, 100));
  
  li2.style.width = `${size}px`;
  li2.style.height = `${size}px`;

  let position = random(10, 85);

  li.style.left = `${position}%`;
  li.style.left = `${position}%`;

  position = random(10, 85);

  li2.style.left = `${position}%`;
  li2.style.left = `${position}%`;
  
  let delay = random(5, 0.1);

  li.style.animationDelay =  `${delay}s`;

  delay = random(5, 0.1);
  
  li2.style.animationDelay =  `${delay}s`;

  let duration = random(48 , 12);

  li.style.animationDuration = `${duration}`;
  
  duration = random(48 , 12);

  li2.style.animationDuration = `${duration}`;

  li.style.animationTimingFunction = `cubic-bezier(${Math.random(), Math.random(), Math.random(), Math.random()})`;
  
  li2.style.animationTimingFunction = `cubic-bezier(${Math.random(), Math.random(), Math.random(), Math.random()})`;
  
  ulSquares.appendChild(li);
  ulSquares.appendChild(li2);
} 