
import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { Register_Object } from "../page/register_object"
import { Register_Data, uen_number } from "../data/register_data"

//Register
Given("User access Aspire website", () => {
    cy.visit(Register_Data.url);
});

When("User input invalid Phone Number", () => {
    cy.wait(3000)
    cy.get(Register_Object.field_phone).type(Register_Data.invalid_phone_number);
    cy.get(Register_Object.button_submit).click();
})

Then("User can not register Account with invalid Phone", () => {
    cy.xpath(Register_Object.label_negative_text).should('have.text', Register_Data.invalid_phone_message);
})

When("User input valid Phone Number", () => {
    cy.get(Register_Object.field_phone).clear();
    cy.get(Register_Object.field_phone).type('99999999');
    cy.get(Register_Object.button_submit).click();
    cy.wait(3000)
    cy.get(Register_Object.field_otp).type(Register_Data.otp_code)
    cy.get(Register_Object.button_submit).click();
})
Then("User can register account by Phone Successfully", () => {
    cy.get(Register_Object.label_resgister).should('have.text', Register_Data.phone_register_success);
})

When("User input invalid Email", () => {
    cy.xpath(Register_Object.button_rigster_type(Register_Data.login_with_email)).click()
    cy.get(Register_Object.field_email).type(Register_Data.invalid_email_format);
    cy.get(Register_Object.button_submit).click();
})

Then("User can not register Account with invalid Email", () => {
    cy.xpath(Register_Object.label_negative_text).should('have.text', Register_Data.invalid_email_message);
})

When("User input valid Email", () => {
    cy.get(Register_Object.field_email).clear()
    cy.get(Register_Object.field_email).type(Register_Data.valid_email);
    cy.get(Register_Object.button_submit).click();
    cy.wait(3000)
    cy.get(Register_Object.field_otp).type(Register_Data.otp_code)
    cy.get(Register_Object.button_submit).click();
})
Then("User can register account by Email Successfully", () => {
    cy.get(Register_Object.label_resgister).should('have.text', Register_Data.phone_register_success);
})

When("User input valid user information", () => {
    cy.get(Register_Object.link_register).click();
    cy.wait(2000)
    cy.get(Register_Object.field_fullname).type(Register_Data.business_name);
    cy.get(Register_Object.field_email).type(Register_Data.business_email);
    cy.get(Register_Object.field_phone).type(Register_Data.valid_phone_number);
    cy.get(Register_Object.drop_register_person).click();
    cy.xpath(Register_Object.drop_down_result(Register_Data.register_person_result)).click();
    cy.get(Register_Object.checkbox_agree).click();
    cy.get(Register_Object.button_submit).click();
})

Then("User can request Buisess Account Successfully", () => {
    cy.wait(4000)
    cy.get(Register_Object.field_otp).type(Register_Data.otp_code)
    cy.wait(4000)
    cy.get(Register_Object.button_submit).click();
    cy.get(Register_Object.message).should('have.text', Register_Data.verify_success);
})
When("User input valid register ACRA information", () => {
    cy.wait(2000)
    cy.get(Register_Object.button_submit).click();
    cy.xpath(Register_Object.button_acra_continue).click();
    cy.get(Register_Object.button_submit).click();
    cy.get(Register_Object.field_dob).click();
    cy.xpath("//button//*[text()='1']").click();

    cy.get(Register_Object.drop_country).click()
    cy.wait(1000)
    cy.get(Register_Object.drop_country).type(Register_Data.country);
    cy.xpath(Register_Object.drop_down_result(Register_Data.country)).click();

    cy.get(Register_Object.drop_gender).click()
    cy.get(Register_Object.drop_gender).type(Register_Data.gender);
    cy.xpath(Register_Object.drop_down_result(Register_Data.gender)).click()

    cy.get(Register_Object.drop_purpose).click();
    cy.xpath(Register_Object.drop_down_result(Register_Data.purpose)).click();

    cy.get(Register_Object.button_submit).click();

    cy.wait(10000)
    cy.get(Register_Object.field_otp).type(Register_Data.otp_code)
    cy.wait(2000)
    cy.get(Register_Object.button_submit).click();
})
Then("User can register Buisess Account Successfully", () => {
    cy.wait(4000)
    cy.get(Register_Object.button_submit).click();
    cy.get(Register_Object.button_submit).click();

    cy.get(Register_Object.field_bussinesname).type(Register_Data.business_name);

    cy.wait(1000)
    cy.get(Register_Object.field_businesstype).click();
    cy.xpath(Register_Object.drop_down_result(Register_Data.company_type)).click();

    cy.get(Register_Object.field_businessuen).type(Register_Data.uen_number);

    cy.get(Register_Object.field_businessrole).click();
    cy.xpath(Register_Object.drop_down_result(Register_Data.company_role)).click();

    cy.get(Register_Object.field_butssinessindustry).click();
    cy.xpath(Register_Object.drop_down_result(Register_Data.business_industry)).click();

    cy.get(Register_Object.field_subbussinessindustrey).click();
    cy.xpath(Register_Object.drop_down_result(Register_Data.subbusiness_industry)).click();

    cy.get(Register_Object.button_submit).click();
    cy.wait(15000)

    cy.get(Register_Object.message).should('have.text', Register_Data.successfully_message);
})