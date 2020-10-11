const Register_Object = {
    field_phone: "input[name='phone']",
    field_email: "input[name='email']",
    label_country: "label[value='[object Object]']",
    label_text: "div=[class='aspire-label__text']",
    button_submit: "button[type='submit']",

    button_rigster_type: (type) => {
        return "//button//*[contains(text()," + "'" + type + "'" + ")]"
    },
    label_resgister: "div[class='q-mb-md text-weight-bolder text-h4']",
    label_negative_text: "//div[@class='aspire-label__text text-negative']",
    link_register: "a[class='text-primary text-bold login__register-link']",
    field_otp: "input[class='q-field__native q-placeholder']",

    button_acra_continue: "//*[contains(text(),'Yes')]//parent::div/following-sibling::button",
    button_nobusiness_continue: "//*[contains(text(),'I')]//parent::div/following-sibling::button",

    field_fullname: "input[name='full_name']",
    checkbox_agree: "div[role='checkbox']",
    drop_register_person: "label div[data-cy='register-person-heard-about']",
    message:"p[class='q-mb-xl']",

    field_dob: "input[placeholder='Set your date of birth']",
    drop_country: "input[url='countries/all']",
    drop_gender: "input[data-cy='kyc-gender']",
    drop_purpose: "input[placeholder='Select your purpose of using Aspire']",
    drop_down_result: (result) => {
        return "//*[contains(text()," + "'" + result + "'" + ")]"
    },

    field_bussinesname: "input[data-cy='register-business-name']",
    field_businessuen:"input[placeholder='Business Registration Number UEN']",
    field_businesstype: "input[data-cy='register-business-registration-type']",
    field_businessrole: "input[data-cy='register-business-registration-role']",
    field_butssinessindustry: "input[data-cy='register-business-industry']",
    field_subbussinessindustrey: "div[label='Sub Industry'] div[data-cy='register-business-sub-industry']"
}
export { Register_Object }