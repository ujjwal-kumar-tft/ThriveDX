import { validationRules } from "../../utils/validations";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input";
import ReactLoading from "react-loading";
import classes from "./ContentTab.module.scss";
import { EmailTemplate } from "../EmailTemplate/EmailTemplate";
import { HtmlTemplate } from "../EmailTemplate/HtmlTemplate";
export const ContentTab = ({
  register,
  handleSubmit,
  errors,
  generatedEmailData,
  handleGenerateEmail,
  emailGeneratingLoading,
  userData,
}) => {
  return (
    <Card className={classes.contentCard}>
      <Input
        label="Sender (From)"
        fieldName="sender"
        register={register}
        type="text"
        rules={validationRules?.sender}
        // error={errors?.sender?.message}
        overrideErrorClassName={classes.overrideErrorClass}
      />
      <Input
        label="Receiver (To)"
        fieldName="receiver"
        register={register}
        type="text"
        // rules={validationRules.receiver}
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
        onClick={handleSubmit(handleGenerateEmail)}
        buttonText={"Generate Email"}
        overrideClassName={classes.generateButton}
      />
      {emailGeneratingLoading && (
        <div className={classes.generatingEmailLoadingContainer}>
          <ReactLoading type={"spin"} height={30} width={30} color="#5c7cfa" />
          <p>Generating Email</p>
        </div>
      )}
      {generatedEmailData?.subject && (
        <>
          <EmailTemplate
            subject={generatedEmailData?.subject}
            receiver={userData?.receiver}
            body={generatedEmailData?.content}
          />
          <HtmlTemplate
            receiver={userData?.receiver}
            body={generatedEmailData?.html}
          />
        </>
      )}
    </Card>
  );
};
