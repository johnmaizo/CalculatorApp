import React, { useState } from 'react'

const App = () => {
	let [Expression, setExpression] = useState("")
	const [doneEquals, setDoneEquals] = useState(false)

	const StyleColorTheme1 = {
		Background1: "hsl(222, 26%, 31%)",
		Theme: '1'
	}
	
	const StyleColorTheme2 = {
		Background1: "hsl(0, 0%, 90%)",
		Theme: '2'
	}

	const StyleColorTheme3 = {
		Background1: "hsl(268, 75%, 9%)",
		Theme: '3'
	}

	let [ColorTheme, setColorTheme] = useState(StyleColorTheme1)

	const ChangeTheme = (e) => {
		const circle = document.querySelector(".circle")
		const footer = document.querySelector(".attribution")

		if (e.target.name == "Theme1") {
			setColorTheme(StyleColorTheme1)
			circle.classList.add("animate1")
			circle.classList.remove("animate2")
			circle.classList.remove("animate3")
			footer.setAttribute("data-theme", "1")
		}
		else if (e.target.name == "Theme2") {
			setColorTheme(StyleColorTheme2)
			circle.classList.add("animate2")
			circle.classList.remove("animate1")
			circle.classList.remove("animate3")
			footer.setAttribute("data-theme", "2")
		}
		else if (e.target.name == "Theme3") {
			setColorTheme(StyleColorTheme3)
			circle.classList.add("animate3")
			circle.classList.remove("animate1")
			circle.classList.remove("animate2")
			footer.setAttribute("data-theme", "3")
		}
	}

	const AddNumber = (e) => {
		if (doneEquals == true) {
			if (!(e.target.name == "+") && !(e.target.name == "-") && !(e.target.name == "*") && !(e.target.name == "/") ) {
				setExpression(e.target.name)
				setDoneEquals(false)
			}
			else {
				setExpression(Expression + e.target.name)
				setDoneEquals(false)
			}
		}
		else {
			setExpression(Expression + e.target.name)
		}
	}

	const Reset = () => {
		setExpression("")
	}

	const Equals = () => {
		if (!Expression == "") {
			let answer
			try {
				answer = eval(Expression)
			} catch (error) {
				answer = "Error"
			}
		
			if (answer == "Error") {
				setExpression(answer)

				setTimeout(() => {
					setExpression("")
				}, 1500);
			}else {
				setExpression(answer)
			}
		} 
		setDoneEquals(true)
	}

	const Delete = () => {
		if (doneEquals == false) {
			let newExpression = Expression.slice(0, -1)
			setExpression(newExpression)
		}
	}

	document.getElementById("root").style = "background-color: " + ColorTheme.Background1 + "; transition: background-color 500ms ease;"

  return (
	<>
		<div className="Calculator" data-theme = {ColorTheme.Theme}>
			<div className="head" style={{color: ColorTheme.KeyTXT1, transition: 'color 500ms ease'}}>
				<div>
					<h1 >calc</h1>
				</div>
				<div className="theme">
					<span className='theme'>THEME</span>
					<div className="flex_wrap">
						<button onClick={ChangeTheme} name='Theme1'></button>
						<button onClick={ChangeTheme} name='Theme2'></button>
						<button onClick={ChangeTheme} name='Theme3'></button>
					</div>
					<div className="texts">
						<span>1</span>
						<span>2</span>
						<span>3</span>
					</div>
					<div className="animation" data-theme = {ColorTheme.Theme}>
						<div className="circle" data-theme = {ColorTheme.Theme}></div>
					</div>
				</div>
			</div>
			<div className="screen" data-theme = {ColorTheme.Theme}>
				<input type="text" className='screenInput' name="Input" id="Input" data-theme = {ColorTheme.Theme} disabled readOnly value={Expression == "" ? '0' : Expression.toLocaleString()} />
			</div>

			<div className="buttons" data-theme = {ColorTheme.Theme}>
				<div className="grid_wrap">
					<button onClick={AddNumber} name='7' data-theme = {ColorTheme.Theme}>7</button>
					<button onClick={AddNumber} name='8' data-theme = {ColorTheme.Theme}>8</button>
					<button onClick={AddNumber} name='9' data-theme = {ColorTheme.Theme}>9</button>
					<button onClick={Delete} className='del' data-theme = {ColorTheme.Theme}>DEL</button>
					<button onClick={AddNumber} name='4' data-theme = {ColorTheme.Theme}>4</button>
					<button onClick={AddNumber} name='5' data-theme = {ColorTheme.Theme}>5</button>
					<button onClick={AddNumber} name='6' data-theme = {ColorTheme.Theme}>6</button>
					<button onClick={AddNumber} name='+' data-theme = {ColorTheme.Theme}>+</button>
					<button onClick={AddNumber} name='1' data-theme = {ColorTheme.Theme}>1</button>
					<button onClick={AddNumber} name='2' data-theme = {ColorTheme.Theme}>2</button>
					<button onClick={AddNumber} name='3' data-theme = {ColorTheme.Theme}>3</button>
					<button onClick={AddNumber} name='-' data-theme = {ColorTheme.Theme}>-</button>
					<button onClick={AddNumber} name='.' data-theme = {ColorTheme.Theme}>.</button>
					<button onClick={AddNumber} name='0' data-theme = {ColorTheme.Theme}>0</button>
					<button onClick={AddNumber} name='/' data-theme = {ColorTheme.Theme}>/</button>
					<button onClick={AddNumber} name='*' data-theme = {ColorTheme.Theme}>x</button>
				</div>
				<div className="two_buttons">
					<button onClick={Reset} className='reset' data-theme = {ColorTheme.Theme}>RESET</button>
					<button onClick={Equals} className='equals' data-theme = {ColorTheme.Theme}>=</button>
				</div>
			</div>
		</div>
	</>
  )
}

export default App