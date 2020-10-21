import React from 'react';
import { useForm } from 'react-hook-form';

// const { register, handleSubmit, errors } = useForm();

// function onSubmit(data) {
//     alert("Clicked submit on outputForm");
// }

export default function outputForm(sampleData) {
    return (
        <form>
        <div className="WineJS Wine Review"></div>
            <h1>Interactive Output Form</h1>
            <h2>Producer: {sampleData.producer} </h2>
            <h2>Wine Name: {sampleData.WineName} </h2>
            <h2>VIntage: {sampleData.Vintage} </h2>
            <h2>Nose Intensity: {sampleData.NoseIntensity} </h2>
            {/* <h2>{sampleData}</h2> */}
        </form>
    );
}
