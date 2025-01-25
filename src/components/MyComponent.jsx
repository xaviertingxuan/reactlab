import React, {useState, useEffect, useRef} from 'react'

export const MyComponent = () => {

    // const [name, setName] = useState("Guest")
    // const [age, setAge] = useState(0)
    // const [isEmployed, setIsEmployed] = useState(false)
    // const updateName = () => {
    //     setName("John")
    // }
    // const incrementAge = () => {
    //     setAge(age+1)
    // }
    // const toggleEmployed = () => {
    //     setIsEmployed(!isEmployed)
    // }

    // return (
    //         <div>
    //             <p>Name: {name}</p>
    //             <button onClick={updateName}>Set Name</button>

    //             <p>Age: {age}</p>
    //             <button onClick={incrementAge}>Increment Age</button>

    //             <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
    //             <button onClick={toggleEmployed}>Employment Status</button>

    //         </div>
    //     )

    // const [name, setName] = useState("Guest")
    // const [quantity, setQuantity] = useState(1)
    // const [comment, setComment] = useState("")
    // const [payment, setPayment] = useState("")
    // const [shipping, setShipping] = useState("Delivery")

    // const handleNameChange = (event) => {
    //     setName(event.target.value)
    // }
    // const handleQuantityChange = (event) => {
    //     setQuantity(event.target.value)
    // }
    // const handleCommentChange = (event) => {
    //     setComment(event.target.value)
    // }
    // const handlePaymentChange = (event) => {
    //     setPayment(event.target.value)
    // }
    // const handleShippingChange = (event) => {
    //     setShipping(event.target.value)
    // }


    // return (
    //     <div>

    //         <input value={name} onChange={handleNameChange}/>
    //         <p>Name: {name}</p>

    //         <input value={quantity} onChange={handleQuantityChange} type="number"/>
    //         <p>Quantity: {quantity}</p>

    //         <textarea value={comment} onChange={handleCommentChange}
    //         placeholder="Enter delivery instructions"/>
    //         <p>Comment: {comment}</p>

    //         <select value={payment} onChange={handlePaymentChange}>
    //             <option value="">Select an option</option>
    //             <option value="Visa">Visa</option>
    //             <option value="Mastercard">Mastercard</option>
    //             <option value="Giftcard">Giftcard</option>
    //         </select>
    //         <p>Payment: {payment}</p>

    //         <label>
    //             <input type='radio' value="Delivery" checked={shipping==="Delivery"}onChange={handleShippingChange}></input>
    //             Delivery
    //         </label>
    //         <label>
    //             <input type='radio' value="Selfcollect" checked={shipping==="Selfcollect"}onChange={handleShippingChange}></input>
    //             Self-collection
    //         </label>
    //         <p>Shipping: {shipping}</p>

    //     </div>
    // )

    // const [car, setCar] = useState([])
    // const [carYear, setCarYear] = useState(new Date().getFullYear())
    // const [carMake, setCarMake] = useState("")
    // const [carModel, setCarModel] = useState("")

    // const handleAddCar = () => {
    //     const newCar = {year: carYear, make: carMake, model: carModel}

    //     setCar(c => [...c, newCar])

    //     setCarYear(new Date().getFullYear())
    //     setCarMake("")
    //     setCarModel("")

    // }
    // const handleRemoveCar = (index) => {
    //     setCar(c => c.filter((_, i) => i !== index))
        
    // }
    // const handleYearChange = (e) => {
    //     setCarYear(e.target.value)
    // }
    // const handleMakeChange = (e) => {
    //     setCarMake(e.target.value) 
    // }
    // const handleModelChange = (e) => {
    //     setCarModel(e.target.value)
    // }

    // return(
    //         <div>
    //             <h2>List of Car Onjects</h2>
    //             <ul>
    //                 {car.map((car, index) => 
    //                 <li key={index} onClick={() => handleRemoveCar(index)}>
    //                     {car.year} {car.make} {car.model}
    //                     </li>)}
    //             </ul>

    //             <input type="number" value={carYear} 
    //                 onChange={handleYearChange} /><br/>
    //             <input type="text" value={carMake} 
    //                 onChange={handleMakeChange} placeholder='Enter Car Make' /><br/>
    //             <input type="text" value={carModel} 
    //                 onChange={handleModelChange} placeholder='Enter Car Model'/><br/>
    //             <button onClick={handleAddCar}>Add Car</button>    
    //         </div>

    // )

    // const [food, setFood] = useState(["Apple", "Orange", "Banana"])

    // const handleAddFood = () => {
    //     const newFood = document.getElementById("foodInput").value
    //     document.getElementById("foodInput").value = ""

    //     setFood(f => [...f, newFood])

    // }
    // const handleRemoveFood = (index) => {

    //     setFood(food.filter((_, i) => i !== index))


    // }

    // return (
    //         <div>
    //             <h2>List of Food</h2>
    //             <ul>
    //                 {food.map((food, index) => 
    //                 <li key={index} onClick={() => handleRemoveFood (index)}>
    //                     {food}</li>)}
    //             </ul>
    //             <input type='text' id="foodInput" placeholder='Enter food name' />
    //             <button onClick={handleAddFood}>Add Food</button>

    //         </div>


    // )

    // const [count, setCount] = useState(0)
    // const [color, setColor] = useState("red")

    // const addCount = () => {
    //     setCount(c => c + 1)
    // }

    // const subtractCount = () => {
    //     setCount(c => c - 1)
    // }
    // const changeColor = () => {
    //     setColor(c => c ==="red" ? "green" : "red")
    // }
    
    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`
    // }, [count, color])

    // return(
    //     <>
    //     <p style={{color: color}}>Count: {count}</p>
    //     <button onClick={addCount}>Add</button>
    //     <button onClick={subtractCount}>Subtract</button>
    //     <button onClick={changeColor}>Change Color</button>

    //     </>
    // )

    // const [width, setWidth] = useState(window.innerWidth)
    // const [height, setHeight] = useState(window.innerHeight)

    // useEffect(() =>{
    //     window.addEventListener("resize", handleResize);
    //     console.log("Event Listener Added");

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //         console.log("Event Listener Removed");
    //     }


    // }, [])


    // function handleResize () {
    //     setWidth(window.innerWidth);
    //     setHeight(window.innerHeight);
    // }

    // return(
    //     <>
    //         <p>Window Width: {width}px</p>
    //         <p>Window Height: {height}px</p>

    //     </>
    // )

    // const inputRef1 = useRef(null)
    // const inputRef2 = useRef(null)
    // const inputRef3 = useRef(null)


    // useEffect(() => {
    //     console.log("Component Rendered");
    //     console.log(inputRef1)
    // })

    // const handleClick = () => {
    //    inputRef1.current.focus()
    //    inputRef1.current.style.backgroundColor = "yellow"
    //    inputRef2.current.style.backgroundColor = ""
    //    inputRef3.current.style.backgroundColor = ""
    // }

    // const handleClick2 = () => {
    //     inputRef2.current.focus()
    //     inputRef2.current.style.backgroundColor = "green"
    //     inputRef1.current.style.backgroundColor = ""
    //     inputRef3.current.style.backgroundColor = ""
    //  }

    //  const handleClick3 = () => {
    //     inputRef3.current.focus()
    //     inputRef3.current.style.backgroundColor = "blue"
    //     inputRef1.current.style.backgroundColor = ""
    //     inputRef2.current.style.backgroundColor = ""
    //  }

    // return (

    //     <>
    //         <button onClick={handleClick}>
    //             Click me 1
    //         </button>
    //         <input ref={inputRef1}/>
    //         <button onClick={handleClick2}>
    //             Click me 2
    //         </button>
    //         <input ref={inputRef2}/>
    //         <button onClick={handleClick3}>
    //             Click me 3
    //         </button>
    //         <input ref={inputRef3}/>
        
    //     </>

    // )




}
