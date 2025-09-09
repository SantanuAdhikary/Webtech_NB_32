

const indianCricketTeam = [
    {
        name: "Rohit Sharma",
        role: "Batsman",
        jerseyNumber: 45,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://via.placeholder.com/150?text=Rohit+Sharma"
    },
    {
        name: "Virat Kohli",
        role: "Batsman",
        jerseyNumber: 18,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium",
        image: "https://via.placeholder.com/150?text=Virat+Kohli"
    },
    {
        name: "Jasprit Bumrah",
        role: "Bowler",
        jerseyNumber: 93,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm fast",
        image: "https://via.placeholder.com/150?text=Jasprit+Bumrah"
    },
    {
        name: "Ravindra Jadeja",
        role: "All-rounder",
        jerseyNumber: 8,
        battingStyle: "Left-hand bat",
        bowlingStyle: "Left-arm orthodox spin",
        image: "https://via.placeholder.com/150?text=Ravindra+Jadeja"
    },
    {
        name: "KL Rahul",
        role: "Wicketkeeper Batsman",
        jerseyNumber: 1,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium",
        image: "https://via.placeholder.com/150?text=KL+Rahul"
    },
    {
        name: "Shubman Gill",
        role: "Batsman",
        jerseyNumber: 77,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://via.placeholder.com/150?text=Shubman+Gill"
    },
    {
        name: "Hardik Pandya",
        role: "All-rounder",
        jerseyNumber: 33,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium-fast",
        image: "https://via.placeholder.com/150?text=Hardik+Pandya"
    },
    {
        name: "Mohammed Siraj",
        role: "Bowler",
        jerseyNumber: 73,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm fast",
        image: "https://via.placeholder.com/150?text=Mohammed+Siraj"
    },
    {
        name: "Suryakumar Yadav",
        role: "Batsman",
        jerseyNumber: 63,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://via.placeholder.com/150?text=Suryakumar+Yadav"
    },
    {
        name: "Rishabh Pant",
        role: "Wicketkeeper Batsman",
        jerseyNumber: 17,
        battingStyle: "Left-hand bat",
        bowlingStyle: "Right-arm medium",
        image: "https://via.placeholder.com/150?text=Rishabh+Pant"
    },
    {
        name: "Axar Patel",
        role: "All-rounder",
        jerseyNumber: 50,
        battingStyle: "Left-hand bat",
        bowlingStyle: "Left-arm orthodox spin",
        image: "https://via.placeholder.com/150?text=Axar+Patel"
    },
    {
        name: "Yuzvendra Chahal",
        role: "Bowler",
        jerseyNumber: 3,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm legbreak",
        image: "https://via.placeholder.com/150?text=Yuzvendra+Chahal"
    },
    {
        name: "Bhuvneshwar Kumar",
        role: "Bowler",
        jerseyNumber: 15,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium-fast",
        image: "https://via.placeholder.com/150?text=Bhuvneshwar+Kumar"
    },
    {
        name: "Shreyas Iyer",
        role: "Batsman",
        jerseyNumber: 41,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://via.placeholder.com/150?text=Shreyas+Iyer"
    },
    {
        name: "Deepak Hooda",
        role: "All-rounder",
        jerseyNumber: 20,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://via.placeholder.com/150?text=Deepak+Hooda"
    }
];



console.log(indianCricketTeam.length)

let ol = document.querySelector("ol")

console.log(ol)

indianCricketTeam.map((ele)=>{

    console.log(ele.name)

    let li = document.createElement("li")

li.innerText = ele.name

    ol.append(li)


})