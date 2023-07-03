import React, { useState } from 'react'
// import { useForm, Controller } from 'react-hook-form';
import RangeSlider from '../../components/RangeSlider/RangeSlidr';
import Styles from './Sidebar.module.scss'

const Sidebar = ({control,Controller,score}) => {
    const urgencyOptions = [
      { label: 'Within the day', value: 'Within the day' },
      { label: '2-4 days', value: '2-4 days' },
      { label: 'Up to a month', value: 'Up to a month' },
      { label: 'None', value: 'None' }
    ];
    const imageOptions = [
        { label: 'High', value: 'High' },
        { label: 'Medium', value: 'Medium' },
        { label: 'Low', value: 'Low' },
    ]
    const consistencyOptions = [
        { label: 'Consistency', value: 'Consistency' },
      { label: 'Suitable', value: 'Suitable' },
      { label: 'Inconsistent', value: 'Inconsistent' },
    ]
    const brandingOptions= [
        { label: 'Airbnb', value: 'Airbnb' },
      { label: 'Amazon', value: 'Amazon' },
      { label: 'Facebook', value: 'Facebook' },
      { label: 'Gmail', value: 'Gmail' },
      { label: 'Instagram', value: 'Instagram' },
      { label: 'Spotify', value: 'Spotify' },
      { label: 'Twitter', value: 'Twitter' },
      { label: 'None', value: 'None' }
    ]

  return (
    <div className='animate__animated animate__fadeInLeft' >
         <div className={Styles.difficulty}>
         <p>Overall Difficulty</p>
         <p><span>{score}</span>/100</p>
         </div>
        <RangeSlider control={control} Controller={Controller} />
        <div className={Styles.radioBox}>
        <p>Urgency</p>
        {urgencyOptions.map((option) => (
          <div key={option.value}>
            <label>
            <Controller
                name="urgency"
                control={control}
                render={({ field }) => (
                  <input
                    type="radio"
                    value={option.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    checked={field.value === option.value}
                  />
                )}
              />
              {option.label}
            </label>
          </div>
        ))}
        </div>
        <div className={Styles.radioBox}>
        <p>Image Quality</p>
        {imageOptions.map((option) => (
          <div key={option.value}>
            <label>
            <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <input
                    type="radio"
                    value={option.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    checked={field.value === option.value}
                    // {...register('imageOptions')}
                  />
                )}
              />
              {option.label}
            </label>
          </div>
        ))}
        </div>
        <div className={Styles.radioBox}>
        <p>Consistency</p>
        {consistencyOptions.map((option) => (
          <div key={option.value}>
            <label>
            <Controller
                name="consistency"
                control={control}
                render={({ field }) => (
                  <input
                    type="radio"
                    value={option.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    checked={field.value === option.value}
                  />
                )}
              />
              {option.label}
            </label>
          </div>
        ))}
        </div>
        <div className={Styles.radioBox}>
        <p>Branding</p>
        {brandingOptions.map((option) => (
          <div key={option.value}>
            <label>
            <Controller
                name="brand"
                control={control}
                render={({ field }) => (
                  <input
                    type="radio"
                    value={option.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    checked={field.value === option.value}
                  />
                )}
              />
              {option.label}
            </label>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Sidebar