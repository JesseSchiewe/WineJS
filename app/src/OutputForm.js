import React from 'react';
import { useForm } from 'react-hook-form';

// const { register, handleSubmit, errors } = useForm();

// function onSubmit(data) {
//     alert("Clicked submit on outputForm");
// }

export default function outputForm(data) {
    return (
        <form>
        <div className="WineJS Wine Review"></div>
            <h1>Output Form</h1>
            <h2>Producer: {data.producer} </h2>
            <h2>Wine Name: {data.WineName} </h2>
            <h2>VIntage: {data.Vintage} </h2>
            <h2>Nose Intensity: {data.NoseIntensity} </h2>
        </form>
    );
}
