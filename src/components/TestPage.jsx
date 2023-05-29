import { Link, useNavigate } from "react-router-dom";
import "./TestPage.css";
import React, { useEffect, useState } from "react";
import SliderComponent from "./Slider";
import RadioButtonComponent from "./RadioBox.jsx";
import axios from "axios";

const TestPage = () => {
  const baseURL = "http://127.0.0.1:5000/name";
  const navigate = useNavigate();
  const [data, setData] = React.useState({});
  const getTest = async () => {
    var List = calcResults();
    var II = List[4];
    var SR = List[5];
    var OR = List[6];
    var IA = List[7];
    var CC = List[8];
    var RS = List[9];
    var dAvg = List[0];
    var iAvg = List[1];
    var sAvg = List[2];
    var cAvg = List[3];
    axios
      .get(
        baseURL +
          "?II=" +
          II +
          "&" +
          "SR=" +
          SR +
          "&" +
          "OR=" +
          OR +
          "&" +
          "IA=" +
          IA +
          "&" +
          "CC=" +
          CC +
          "&" +
          "RS=" +
          RS +
          "&" +
          "dAvg=" +
          dAvg +
          "&" +
          "iAvg=" +
          iAvg +
          "&" +
          "sAvg=" +
          sAvg +
          "&" +
          "cAvg=" +
          cAvg +
          "&"
      )
      .then((res) => {
        setData({ data: res.data });
        console.log(res.data);
        console.log("Keys: " + Object.keys(res.data));
        console.log("Type: " + typeof res.data);
        navigate("/Results", { state: { info: res.data } });
      })

      .catch((err) => {
        console.log(err);
      }, []);
  };

  function calcResults() {
    var Davg = sliderValues[(0, 1, 2, 3)];
    if(Davg>0){
      Davg = 1;
    }
    else{
      Davg = 0;
    }
    var Iavg = sliderValues[(4, 5, 6, 7)];
    if(Iavg>0){
      Iavg = 1;
    }
    else{
      Iavg = 0;
    }
    var Savg = sliderValues[(8, 9, 10, 11)];
    if(Savg>0){
      Savg = 1;
    }
    else{
      Savg = 0;
    }
    var Cavg = sliderValues[(12, 13, 14, 15)];
    if(Cavg>0){
      Cavg = 1;
    }
    else{
      Cavg = 0;
    }
    var II = sliderValues[16];
    if(II>0){
      II = 1;
    }
    else{
      II = 0;
    }
    var SR = sliderValues[17];
    if(SR>0){
      SR = 1;
    }
    else{
      SR = 0;
    }
    var OR = sliderValues[18];
    if(OR>0){
      OR = 1;
    }
    else{
      OR = 0;
    }
    var IA = sliderValues[19];
    if(IA>0){
     IA= 1;
    }
    else{
      IA = 0;
    }
    var CC = sliderValues[20];
    if(CC>0){
      CC = 1;
    }
    else{
      CC = 0;
    }
    var RS = sliderValues[21];
    if(RS>0){
      RS = 1;
    }
    else{
      RS = 0;
    }
    return [Davg, Iavg, Savg, Cavg, II, SR, OR, IA, CC, RS];
  }

  function handleClick() {
    var List;
    List = calcResults();
    navigate("/Results", {
      /*state: {
        II: List[4],
        SR: List[5],
        OR: List[6],
        IA: List[7],
        CC: List[8],
        RS: List[9],
        dAvg: List[0],
        iAvg: List[1],
        sAvg: List[2],
        cAvg: List[3],
      },*/
      state: {
        info: 6 /*getResults()*/,
      },
    });
  }
  const questions = [
    {
      id: 1,
      minValue: -5,
      maxValue: 5,
      question: "Collaborative or Competitive?",
      type: "slider",
      page: 1,
    },
    {
      id: 2,
      minValue: -5,
      maxValue: 5,
      question: "Wise Mover or Fast Mover?",
      type: "slider",
      page: 1,
    },
    {
      id: 3,
      minValue: -5,
      maxValue: 5,
      question: "Calculative or Risk Taker?",
      type: "slider",
      page: 1,
    },
    {
      id: 4,
      minValue: -5,
      maxValue: 5,
      question: "Receive Instructions or Give Instructions?",
      type: "slider",
      page: 1,
    },
    {
      id: 5,
      minValue: -5,
      maxValue: 5,
      question: "Research Driven or Experience Driven?",
      type: "slider",
      page: 2,
    },
    {
      id: 6,
      minValue: -5,
      maxValue: 5,
      question: "Skeptical or Trust Easily?",
      type: "slider",
      page: 2,
    },
    {
      id: 7,
      minValue: -5,
      maxValue: 5,
      question: "Convince Small Groups or Inspire Masses?",
      type: "slider",
      page: 2,
    },
    {
      id: 8,
      minValue: -5,
      maxValue: 5,
      question: "Shy for Spotlight or Like to be Under Spotlight?",
      type: "slider",
      page: 2,
    },
    {
      id: 9,
      minValue: -5,
      maxValue: 5,
      question: "Confrontational or Non-Confrontational?",
      type: "slider",
      page: 3,
    },
    {
      id: 10,
      minValue: -5,
      maxValue: 5,
      question: "Prefer to Show Emotion or Not to Show Emotion?",
      type: "slider",
      page: 3,
    },
    {
      id: 11,
      minValue: -5,
      maxValue: 5,
      question: "Into Adventure or Into Security?",
      type: "slider",
      page: 3,
    },
    {
      id: 12,
      minValue: -5,
      maxValue: 5,
      question: "Into Change or Into Steadiness?",
      type: "slider",
      page: 3,
    },
    {
      id: 13,
      minValue: -5,
      maxValue: 5,
      question: "Satisfactory or Perfectionist?",
      type: "slider",
      page: 4,
    },
    {
      id: 14,
      minValue: -5,
      maxValue: 5,
      question: "Facial Expression or Poker Face?",
      type: "slider",
      page: 4,
    },
    {
      id: 15,
      minValue: -5,
      maxValue: 5,
      question: "Shortcuts or Details?",
      type: "slider",
      page: 4,
    },
    {
      id: 16,
      minValue: -5,
      maxValue: 5,
      question: "Perform well when under:No Constraints or Concrete Process",
      type: "slider",
      page: 4,
    },
    {
      id: 17,
      minValue: -5,
      maxValue: 5,
      question:
        "Instinctive: People who are driven by utilizing past experiences,intuition and seeking specific knowledge when necessary. Or Intellectual: People who are driven by opportunities to learn, acquireknowledge and the discovery of truth",
      type: "slider",
      page: 5,
    },
    {
      id: 18,
      minValue: -5,
      maxValue: 5,
      question:
        "Selfless: People who are driven by completing tasks for the sake ofcompletion, with little expectation of personal return or Resourceful: People who are driven by practical results, maximizing both efficiency and returns for their investments.",
      type: "slider",
      page: 5,
    },
    {
      id: 19,
      minValue: -5,
      maxValue: 5,
      question:
        "Objective: People who are driven by the functionality and objectivity of their surroundings. or Harmonious: People who are driven by the experience, subjective viewpoints and balance in their surroundings.",
      type: "slider",
      page: 5,
    },
    {
      id: 20,
      minValue: -5,
      maxValue: 5,
      question:
        "Intentional: People who are driven to assist others for a specificpurpose, not just for the sake of being helpful or supportive. or Altruistic: People who are driven to assist others for the satisfaction ofbeing helpful or supportive.",
      type: "slider",
      page: 6,
    },
    {
      id: 21,
      minValue: -5,
      maxValue: 5,
      question:
        "Commanding: People who are driven by status, recognition and controlover personal freedom.orCollaborative: People who are driven by being in a supporting role andcontributing with little need for individual recognition.",
      type: "slider",
      page: 6,
    },
    {
      id: 22,
      minValue: -5,
      maxValue: 5,
      question:
        "Receptive: People who are driven by new ideas, methods andopportunities that fall outside a defined system for living.or Structured: People who are driven by traditional approaches, provenmethods and a defined system for living.",
      type: "slider",
      page: 6,
    },
    // {
    //   id: 5,
    //   question: "Do you agree with the terms and conditions?",
    //   type: "checkbox",
    //   page: 6,
    // },
    // {
    //   id: 6,
    //   question: "What is your preferred payment method?",
    //   type: "radio",
    //   options: ["Credit Card", "Paypal", "Cash on Delivery"],
    //   page: 6,
    // },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [sliderValues, setSliderValues] = useState(0);
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted!");
    handleClick();
  };
  const handleSliderChange = (questionId, value) => {
    setSliderValues((prevSliderValues) => ({
      ...prevSliderValues,
      [questionId]: value,
    }));
  };
  const [radioValues, setRadioValues] = useState({});

  const handleRadioChange = (questionId, value) => {
    setRadioValues((prevRadioValues) => ({
      ...prevRadioValues,
      [questionId]: value,
    }));
  };
  return (
    <div className="TestPage">
      <h1 className="TestPage-header">Test Page</h1>
      {questions.map((question) => {
        if (question.page === currentPage) {
          if (question.type === "slider") {
            return (
              <div key={question.id}>
                <h3>Question {question.id}</h3>
                <p>{question.question}</p>
                <SliderComponent
                  minValue={question.minValue}
                  maxValue={question.maxValue}
                  page={question.page}
                  value={sliderValues[question.id] || 0}
                  onChange={(value) => handleSliderChange(question.id, value)}
                />
              </div>
            );
          } else if (question.type === "checkbox") {
            return (
              <div key={question.id}>
                <h3>Question {question.id}</h3>
                <p>{question.question}</p>
                {/* Render checkbox component */}
              </div>
            );
          } else if (question.type === "radio") {
            return (
              <div key={question.id}>
                <h3>Question {question.id}</h3>
                <p>{question.question}</p>
                <RadioButtonComponent
                  options={question.options}
                  value={radioValues[question.id] || ""}
                  onChange={(value) => handleRadioChange(question.id, value)}
                />
                <p>Selected Value: {radioValues[question.id]}</p>
              </div>
            );
          }
        }
      })}
      <button disabled={currentPage === 1} onClick={handlePrevious}>
        Previous
      </button>
      <button
        disabled={currentPage === questions[questions.length - 1].page}
        onClick={handleNext}
      >
        Next
      </button>
      {currentPage === questions[questions.length - 1].page && (
        <button onClick={getTest}>Submit</button>
      )}

      {/* <ul>
        <li>
          <Link to="/">TestPage</Link>
        </li>
        <li>
          <Link to="/SignIn">SignIn</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default TestPage;
