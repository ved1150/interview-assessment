import React from 'react'

export default function Data() {
    let data = {
    name: "David Tokan",
    profession: "MID ARCHITECH",
    about:
      "As for the memos look make sure the text is clear and easy to read however you can include your logo company name and a few relevant photos another idea is to use your brand colour to create memo that align with your overall mission",
      skill : ["INTERIOR DESIGN" , "3D MODELING " , "PHOTOGRAPHY"] ,
      contact: {
        email :"hello@reallygreatsite.com" ,
        number : "123-456-7890"
      } ,
      education : {
        bachelor : {
          name  : "bachelor of architecture",
          year  : 2014,
          discription : "Marcelioneli Art Academy"
        },
        master : {
          name  : "mastets of architecture",
          year  : 2018,
          discription : "Sami Institute of the Art"
        }
      },
      languages : ["English" ,"German" ,"Italian"] ,
      experience : [{
        jobTitle : "JUNIOR ASSISTANT" ,
        year : 2018 ,
        role : ["Worked on marketing campaigns." ," Handle multiple digital accounts." ,"Created digital marketing campaigns." , "Assisted the head designer"]
      } ,
      {
        jobTitle : "JUNIOR ARCHITECH" ,
        year : 2019 ,
        role : ["Worked on marketing campaigns." ," Handle multiple digital accounts." ,"Created digital marketing campaigns." , "Assisted the head designer"]
      },
      {
        jobTitle : "PROJECT MANAGERT" ,
        year : 2020 ,
        role : ["Worked on marketing campaigns." ," Handle multiple digital accounts." ,"Created digital marketing campaigns." , "Assisted the head designer"]
      },
      {
        jobTitle : "MID LEVEL ARCHITECH" ,
        year : 2026 ,
        role : ["Worked on marketing campaigns." ," Handle multiple digital accounts." ,"Created digital marketing campaigns." , "Assisted the head designer"]
      }]
    };
    fetch(
      `https://interview-task-c6468-default-rtdb.firebaseio.com/profile.json`,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    ).then((res) => {
      if (res.ok) {
        alert("set")
      } else {
        res.json().then((data) => alert(data.error.message));
      }
    });
  return (
    <div></div>
  )
}
