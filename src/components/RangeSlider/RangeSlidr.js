import React, { useState } from 'react';
import styles from "./RangeSlider.module.scss"
const RangeSlider = ({Controller,control}) => {
  return (
    <div className={`${styles.rangeSlider}`}>
      <p>Spelling Mistake</p>
      <Controller
        name="spelling_mistakes"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <div>
            <p className={styles.value}>{field.value}</p>
            <input
              type="range"
              {...field}
              min={0} 
              max={10} 
            />
          </div>
        )}
      />
    </div>
  );
};

export default RangeSlider;
