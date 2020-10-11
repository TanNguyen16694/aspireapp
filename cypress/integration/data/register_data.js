var faker = require('faker/locale/en_AU');
import RandExp from "randexp";
const Register_Data = {
    url: "https://qa-test.customer-frontend.staging.aspireapp.com/sg/",
    // Phone
    invalid_phone_number: faker.phone.phoneNumberFormat(),
    valid_phone_number: faker.random.number({ min: 11111111, max: 99999999 }),
    // otp code
    otp_code: "123456",
    // email
    invalid_email_format: faker.internet.email(),
    valid_email: 'test@gmail.com',
    login_with_email: "Login with email",
    // verify message
    invalid_phone_message: "\n    Incorrect phone format for phone.\n  ",
    invalid_email_message: "\n    The selected email is invalid.\n  ",
    //success message
    phone_register_success: "\n    Incorporate your company and open a business account on the same day\n  ",
    verify_success: "\n    You have successfully verified your phone number. You’re on to a great start!\n  ",

    congratulation_message: "\n    You are amazing and you know it\n  ",

    successfully_message: "\n    You have successfully completed the KYC processs and we have received your documents.\n  ",

    business_name: faker.company.companyName(),
    business_email: faker.internet.email(),
    company_type: 'Company (Public company, Pte Ltd, LLC)',
    company_role: 'Company Director',
    business_industry: 'Manufacturing',
    subbusiness_industry: 'Fashion',
    register_person_result: "Facebook",
    country: 'Singapore',
    gender: 'Male',
    purpose: 'Credit Line',
    uen_number: new RandExp("^([0-9]{8,9}[a-zA-Z]{1})$").gen(),
}
export { Register_Data };