import { validationRules } from "../../utils/validations";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input";
import TextArea from "../UI/Input/TextArea";
import classes from "./RephraseTab.module.scss";
import ReactLoading from "react-loading";
export const RephraseTab = ({
  register,
  handleSubmit,
  modifyingEmailLoading,
  emailScanningLoading,
  errors,
  // generatedJsonData,
  generatedEmailData,
  handleModifyEmail,
  handleVerifyEmail,
  textAreaValue,
  onChangeTextArea,
  isIdentifiedEmailGenerated,
}) => {
  return (
    <Card className={classes.contentCard}>
      <TextArea
        value={textAreaValue}
        onChange={onChangeTextArea}
        fieldName="verifycontent"
        label={"Please enter your email content here"}
        className={classes.textAreaClass}
        labelClassName={classes.textAreaLabel}
      />
      <Button
        onClick={handleVerifyEmail}
        overrideClassName={classes.verifyButton}
        buttonText={"Verify"}
      />
      <div>
        {Object.keys(generatedEmailData.verifyData).length > 0 && <div>
          <ul className={classes.scan}>
          {Object.keys(generatedEmailData.verifyData).map((key, index) => {
        return <li style={{width:"33%",marginBottom:"10px"}}>{key.charAt(0).toUpperCase() + key.slice(1)}  : <span style={{fontWeight:550}}>{Array.isArray(generatedEmailData.verifyData[key])?generatedEmailData.verifyData[key].join(','):generatedEmailData.verifyData[key]}</span></li>})}
          </ul>
      
          </div>}
      </div>
      {emailScanningLoading && (
        <div className={classes.generatingEmailLoadingContainer}>
          <ReactLoading type={"spin"} height={30} width={30} color="#5c7cfa" />
          <p>Scanning email content...</p>
        </div>
      )}
      {isIdentifiedEmailGenerated && (
        <>
          <h1 className={classes.heading}>Identified Email:</h1>
          {/* <h1 className={classes.generatedJsonContent}>{generatedJsonData}</h1> */}
          <hr className={classes.hr} />
        </>
      )}
      <Input
        label="Sender (From)"
        fieldName="sender"
        register={register}
        type="text"
        // rules={validationRules?.email}
        // error={errors?.sender?.message}
        overrideErrorClassName={classes.overrideErrorClass}
      />
      <Input
        label="Receiver (To)"
        fieldName="receiver"
        register={register}
        type="text"
        // rules={validationRules.email}
        // error={errors?.receiver?.message}
        overrideErrorClassName={classes.overrideErrorClass}
      />
      <Input
        label="Any other instructions you would like to add"
        fieldName="instructions"
        placeholder=""
        register={register}
        type="text"
        // rules={validationRules.description}
        // error={errors?.instructions?.message}
        overrideErrorClassName={classes.overrideErrorClass}
      />
      <Button
        onClick={handleSubmit(handleModifyEmail)}
        buttonText={"Modify Email"}
        overrideClassName={classes.generateButton}
      />
      {modifyingEmailLoading && (
        <div className={classes.generatingEmailLoadingContainer}>
          <ReactLoading type={"spin"} height={30} width={30} color="#5c7cfa" />
          <p>Modifying Email...</p>
        </div>
      )}
    </Card>
  );
};
