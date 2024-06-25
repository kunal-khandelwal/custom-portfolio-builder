import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Resume from "./components/Resume/Resume";

const App = () => {
  const { id } = useParams();
  const [isCustom, setIsCustom] = useState(false);
  const [resumeData, setResumeData] = useState({
    name: "Kunal Khandelwal",
    title: "Frontend Dev",
    location:"Delhi, India",
    description: "lorem ipsum",
    workExperience: [
      {
        organisation: "Paytm",
        joinedIn: "June 2021",
        leftOn: "0", // 0 if currently works here, else month, year
        position: "Software Developer",
        description: ["Lorem ipsum", "lorem ipsume 2", "lorem ipsum 3"],
      },
      {
        organisation: "ConsultIT",
        joinedIn: "June 2020",
        leftOn: "July 2020", // 0 if currently works here, else month, year
        position: "Software Dev Intern",
        description: ["Lorem ipsum", "lorem ipsume 2", "lorem ipsum 3"],
      },
    ],
    education: [
      {
        organisation: "NITJ",
        joinedIn: "June 2027",
        leftOn: "June 2021",
        major: "CSE",
        gpa: "7.8",
      },
      {
        organisation: "CBSE",
        joinedIn: "June 2014",
        leftOn: "June 2016",
        major: "Secondary",
        gpa: "7.8",
      },
    ],
  });

  const [nameInitials,setNameInitials] = useState(["K", "K"]);

  useEffect(() => {
    console.log(id ? "id present" : "no Id Present");
    if (id) {
      setIsCustom(true);
      // call API & fill all the data in state
      // setResumeData here
    }
  },[id]);

  useEffect(()=>{
    // find and set initials here

  },[])

  return (
    // <div className="bg-red-500 p-2 text-center rounded-lg">
    //   {console.log(resumeData, id)}
    //   <h1>Hi, I'm {resumeData.name}</h1>
    //   <h2>I'm a {resumeData.title}</h2>
    //   <div>{resumeData.description}</div>
    // </div>
    <Resume resumeData={resumeData} nameInitials={nameInitials} />
  );
};

export default App;
