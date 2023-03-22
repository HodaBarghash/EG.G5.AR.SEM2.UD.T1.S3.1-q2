function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5bUMyj2u6NP":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz8oJv9U0mm8Q1PfvjwpajoKhcZpciIGDfgKrZiE0Xq_8lUMZJx8vmMYEo9XSfllVs1SQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

