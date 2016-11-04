body{
    background-image: url(assets/images/background.png);
    height: 100%;
    }
@font-face{
    font-family: theContentFont;
    src: url(assets/fonts/Ubuntu.ttf)
}

/* Header */
.outer{
    border: 5px solid #646566;
    border-radius: 15px;
    padding: 20px;
    width: 60%;
    margin: 50px 20px 20px 50px;
}
.inner {
    margin-top: -20px;
    margin-bottom: -20px;
    margin-right: -6px;
    margin-left: -6px;
    border-radius: 10px;
    background-color: #646566;
    width: 100%;
}
#verifybox{
    border: 5px solid #646566;
    border-radius: 15px;
    padding: 20px;
    width: 200px;
    height: 100px;
    margin-left: 70%;
    margin-top: 50px;
}
#DirectionsLabel {
    color: white;
    font-size: 25px;
    font-family: theContentFont;
    border-spacing: 100px;
    padding: 3px 3px; 
    background-color: #646566;
    border-radius: 5px;
    margin-left: 10px;
    padding-top: 20px;
}
#Directions {
    color: white;
    font-size: 25px;
    font-family: theContentFont;
    border-spacing: 100px;
    padding: 10px; 
    background-color: #646566;
    border-radius: 5px;
    margin-left: 50px;
    margin-top: -30px;
}
#QuestionLabel {
    color: white;
    font-size: 25px;
    font-family: theContentFont;
    border-spacing: 100px;
    padding: 3px 3px; 
    background-color: #646566;
    border-radius: 5px;
    margin-left: 10px;
}
#Question {
    color: white;
    font-size: 25px;
    font-family: theContentFont;
    border-spacing: 100px;
    padding: 10px; 
    background-color: #646566;
    border-radius: 5px;
    margin-left: 50px;
    margin-top: -30px;
    padding-bottom: -30px;
}
.answers{
    margin-top: -150px;
}
#verify{
    margin-left: 50px;
}
#next{
    margin-right: -50px;
}
.NextQuestionLabel {
    color: white;
    font-size: 25px;
    font-family: theContentFont;
    border-spacing: 100px;
    padding: 3px 3px; 
    background-color: #646566;
    border-radius: 5px;
    margin-left: 100px;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 250px;
}

/*  Formatting for the Label */
ul li label{
    display: block;
    position: relative;
    font-weight: 300;
    font-size: 25px;
    padding: 25px 25px 25px 80px;
    margin: 10px auto;
    height: 30px;
    z-index: 9;
    cursor: pointer;
    font-family: theContentFont;
}

/*  First is the formatting of the option list
    Second is The Button itself 
    Third is some properties  */
li{
    color: #FFFFFF;
    display: block;
    position: relative;
    float: left;
    width: 100%;
    height: 100px;
}
.check{
    display: block;
    position: absolute;
    border: 5px solid #FFFFFF;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    top: 30px;
    left: 20px;
    z-index: 5;
}
input[type=radio]{
  position: absolute;
  visibility: hidden;
}

/*  Radio Button Properties 
    First is Label Hover
    Second is before checked
    Third is after checked  */
li:hover label{
	color: #646566;
}
li .check::before {
    display: block;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 15px;
    width: 15px;
    top: 5px;
    left: 5px;
    margin: auto;
}
input[type=radio]:checked ~ .check::before{
    background: #FFFFFF;
}

/* Button Styles */
.verifyanswer {
  display: inline-block;
  background-color: #646566;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 275px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  margin-top: 5%;
  margin-left: -39%;
  border-radius: 10px;
}
.nextbutton {
  display: inline-block;
  background-color: #646566;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 275px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  margin-top: 5%;
  margin-left: 33%;
  border-radius: 10px;
}
