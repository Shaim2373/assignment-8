import './cart.css'
import '../Product/Product'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
    const {cart } = props;
    // const [breaktime , cart] = props;
    let sec = 0;
    let total = 0;
    let quintity = 0;
    for (const product of cart) {
        quintity = quintity + product.quintity;
        total = total + product.sec * product.quintity;
        sec = total + product.sec
    }
    const toastHandle = () => {
        toast("welcome to web");
    }
    const [number, setnumber] = useState([])
    const handleServiceAdd = () => {
        setnumber(10)
    }
    const [number1, setnumber1] = useState([])
    const handleServiceAdd1 = () => {
        setnumber1(20)
    }
    const [number2, setnumber2] = useState([])
    const handleServiceAdd2 = () => {
        setnumber2(30)
    }
    const [number3, setnumber3] = useState([])
    const handleServiceAdd3 = () => {
        setnumber3(40)
    }
    const [number4, setnumber4] = useState([])
    const handleServiceAdd4 = () => {
        setnumber4(50)
    }
    return (
        <div className='cart'>
            <h3>My name is Shaim</h3>
            <p>location : Meherpur , Bangladesh</p>
            <div>
                <div>
                    <h3>Add break</h3>
                    <div className='break-btn'>
                        <button onClick={handleServiceAdd} className='rounded-circle border-0'>
                            <p>10s</p>
                        </button>
                        <button onClick={handleServiceAdd1} className='rounded-circle border-0'>
                            <p>20s</p>
                        </button>
                        <button onClick={handleServiceAdd2} className='rounded-circle border-0'>
                            <p>30s</p>
                        </button>
                        <button onClick={handleServiceAdd3} className='rounded-circle border-0'>
                            <p>40s</p>
                        </button>
                        <button onClick={handleServiceAdd4} className='rounded-circle border-0'>
                            <p>50s</p>
                        </button>
                    </div>
                </div>
                <div className='time-heading'>
                    <h3>Exercise Details</h3>
                </div>
                <div className='time'>
                    <p>Exercise time <small> {sec} secend</small></p>
                </div>
                <div className='break-time'>
                    <p>Break time <small>{number} {number1} {number2} {number3} {number4}  secend</small></p>
                </div>

                <button onClick={toastHandle} id='toast-btn' className='btn btn-primary'>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
    
};

export default Cart;