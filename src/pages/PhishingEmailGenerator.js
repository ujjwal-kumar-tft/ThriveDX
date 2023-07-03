import React, { useEffect, useState } from "react";
import classes from "./PhishingEmailGenerator.module.scss";
import TabBar from "../components/UI/TabBar/TabBar";
import { useForm, Controller, useWatch } from "react-hook-form";
import Sidebar from "../layouts/SIdebar.js/Sidebar";
import { ContentTab } from "../components/Tabs/ContentTab";
import { RephraseTab } from "../components/Tabs/RephraseTab";
import burgerMenu from ".././assets/burger-bar.png";
import { useAdminApiService } from "../utils/helpers";
import adminServices from "../utils/services/adminServices";
import {toast } from 'react-toastify';
import { getError } from "../utils/helpers";


function PhishingEmailGenerator() {
  const [loading, setLoading] = useState({
    isIdentifiedEmailGenerated: false,
  });
  const [textAreaContent, setTextAreaContent] = useState("");
  const [collapseSidebar, setCollapseSidebar] = useState("");
  const [score, setScore] = useState();

  const [generatedEmailData, setGeneratedEmailData] = useState({
    generatedEmail: {
      content: "",
      html: "",
      subject: "",
    },
    verifyData: {},
  });

  let generatedJsonData = `{sender: 'test@gmail.com', receiver: 'test@gmail.com', instructions: 'lewwddwdwdewdewdewdwdwdewdewdwdewiudewiudiudiwdidiuidididiudiudiuwdiuewdiuwdiudiuwdiudiuh', urgency: 'Up to a month', image: 'Medium',brand: "Gmail",consistency: "Suitable",spelling_mistakes: 3}`;
  //generate-email-api-service
  const {
    state: {
      loading: generateEmailLoading,
      isSuccess: isGenerateEmailSuccess,
      data: generateEmailResponse,
      isError: isGenerateEmailError,
      error: generateEmailError,
    },
    callService: generateEmailService,
    resetServiceState: resetGenerateEmailState,
  } = useAdminApiService(adminServices.generateEmail);
  useEffect(() => {
    if (isGenerateEmailError && generateEmailError) {
      console.log(generateEmailError);
      resetGenerateEmailState();
      toast.error(getError(generateEmailError));
    }
    if (isGenerateEmailSuccess && generateEmailResponse) {
      console.log(generateEmailResponse);
      setGeneratedEmailData({
        ...generatedEmailData,
        generatedEmail: generateEmailResponse?.data,
      });
    }
  }, [
    generateEmailError,
    isGenerateEmailError,
    isGenerateEmailSuccess,
    generateEmailResponse,
  ]);
  //modify-email-api-service
  const {
    state: {
      loading: modifyEmailLoading,
      isSuccess: isModifyEmailSuccess,
      data: modifyEmailResponse,
      isError: isModifyEmailError,
      error: modifyEmailError,
    },
    callService: modifyEmailService,
    resetServiceState: resetModifyEmailState,
  } = useAdminApiService(adminServices.modifyEmail);
  useEffect(() => {
    if (isModifyEmailError && modifyEmailError) {
      console.log(modifyEmailError);
      resetModifyEmailState();
      toast.error(getError(modifyEmailError));
    }
    if (isModifyEmailSuccess && modifyEmailResponse) {
      setGeneratedEmailData({
        ...generatedEmailData,
        generatedEmail: modifyEmailResponse?.data,
      });
    }
  }, [
    modifyEmailError,
    isModifyEmailError,
    isModifyEmailSuccess,
    modifyEmailResponse,
  ]);
  //verify-email-api-service
  const {
    state: {
      loading: verifyEmailLoading,
      isSuccess: isVerifyEmailSuccess,
      data: verifyEmailResponse,
      isError: isVerifyEmailError,
      error: verifyEmailError,
    },
    callService: verifyEmailService,
    resetServiceState: resetVerifyEmailState,
  } = useAdminApiService(adminServices.scanEmail);
  useEffect(() => {
    if (isVerifyEmailError && verifyEmailError) {
      console.log(verifyEmailError);
      resetVerifyEmailState();
      toast.error(getError(verifyEmailError));
    }
    if (isVerifyEmailSuccess && verifyEmailResponse) {
      setGeneratedEmailData({
        ...generatedEmailData,
        verifyData: verifyEmailResponse?.data,
      });
      const data = verifyEmailResponse?.data
      const updateData = {
        spelling_mistakes: data?.spelling_mistakes,
        urgency: data?.urgency,
        consistency: data?.consistency,
        brand: data?.brand,
        sender: data?.sender,
        receiver: data?.receiver,
        instructions: data?.instructions,
        image:data?.image
      };
      Object.entries(updateData).forEach(([name, value]) => setValue(name, value));
    }
  }, [
    verifyEmailError,
    isVerifyEmailError,
    isVerifyEmailSuccess,
    verifyEmailResponse,
  ]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue
    // reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      sender: "",
      receiver: "",
      instructions: "",
      urgency: "Up to a month",
      image: "Medium",
      consistency: "Suitable",
      brand: "Gmail",
      spelling_mistakes: 3,
    },
  });

  const formData = useWatch({ control });

  function calculateScore(spelling, urgency, consistency) {
    const urgencyMap = {
      "Within the day": 1,
      "2-4 days": 2,
      "Up to a month": 3,
      "None": 4,
    };
    const consistencyMap = { Consistency: 1, Suitable: 2, Inconsistent: 3 };
    const score1 = Math.floor(
      33.3 / (spelling + 1) +
        33.3 / urgencyMap[urgency] +
        33.3 / consistencyMap[consistency]
    );
    setScore(score1.toFixed(2));
  }

  useEffect(() => {
    calculateScore(
      formData.spelling_mistakes,
      formData.urgency,
      formData.consistency
    );
  }, [formData]);

  const CollapseHandler = () => {
    setCollapseSidebar(!collapseSidebar);
  };

  const handleGenerateEmail = (data) => {
    const postData = {
      spelling_mistakes: data?.spelling_mistakes,
      urgency: data?.urgency,
      consistency: data?.consistency,
      brand: data?.brand,
      sender: data?.sender,
      receiver: data?.receiver,
      instructions: data?.instructions,
    };
    generateEmailService(postData);
  };

  const handleModifyEmail = (data) => {
    const postData = {
      spelling_mistakes: data?.spelling_mistakes,
      urgency: data?.urgency,
      consistency: data?.consistency,
      brand: data?.brand,
      sender: data?.sender,
      receiver: data?.receiver,
      instructions: data?.instructions,
    };
    modifyEmailService(postData);
  };

  const handleVerifyEmail = () => {
    const postData = {
      content: textAreaContent,
    };
    verifyEmailService(postData);
  };

  const handleChangeTextArea = (e) => {
    setTextAreaContent(e.target?.value);
  };

  const tabs = [
    {
      title: "Content",
      content: (
        <ContentTab
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          userData={formData}
          generatedEmailData={generatedEmailData?.generatedEmail}
          handleGenerateEmail={handleGenerateEmail}
          emailGeneratingLoading={generateEmailLoading}
        />
      ),
    },
    {
      title: "Rephrase",
      content: (
        <RephraseTab
          register={register}
          handleSubmit={handleSubmit}
          isEmailGenerated={loading?.generateEmailLoading}
          errors={errors}
          generatedEmailData={generatedEmailData}
          handleGenerateEmail={handleGenerateEmail}
          modifyingEmailLoading={modifyEmailLoading}
          emailScanningLoading={verifyEmailLoading}
          generatedJsonData={generatedJsonData}
          handleModifyEmail={handleModifyEmail}
          handleVerifyEmail={handleVerifyEmail}
          textAreaValue={textAreaContent}
          onChangeTextArea={handleChangeTextArea}
          isIdentifiedEmailGenerated={loading?.isIdentifiedEmailGenerated}
        />
      ),
    },
    // { title: "Image", content: <ImageTab /> },
  ];

  return (
    <div className={classes.container}>
      <div
        style={{
          width: "20%",
          position: "relative",
          backgroundColor: "rgb(239, 241, 246)",
        }}
      >
        <img
          src={burgerMenu}
          alt=""
          onClick={CollapseHandler}
          style={{
            position: "absolute",
            zIndex: 2,
            top: "10px",
            left: "15px",
            width: "40px",
            filter:!collapseSidebar?"invert(1)":""
          }}
        />
        <div
          className={classes.pageLeft}
          style={{ width: collapseSidebar ? "0" : "100%" }}
        >
          {!collapseSidebar && (
            <Sidebar
              score={score}
              control={control}
              Controller={Controller}
              burgerMenu={burgerMenu}
              CollapseHandler={CollapseHandler}
            />
          )}
        </div>
      </div>
      <div className={classes.pageRight}>
        <h1 className={classes.heading}>Phising Email Generator</h1>
        <TabBar tabs={tabs} />
      </div>
    </div>
  );
}

export default PhishingEmailGenerator;
