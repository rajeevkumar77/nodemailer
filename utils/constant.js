const { formatPrice } = require("./functions");

exports.Messages = {
  INVALID_TOKEN: 'Invalid token',
  LOGIN_SUCCESS: 'Login successfully',
  PHONE_NUMBER_EXIST: 'Phone number exist',
  PHONE_NUMBER_NOT_EXIST: 'Phone number not exist',
  PHONENUMBER_REQUIRED: 'Phone number required',
  USER_NOT_FOUND: 'User not found',
  ACCOUNT_CREATE_SUCCESS:'Account Created succesfully',
  SOMETHING_WENT_WRONG: 'Something went wrong',
  NAME_REQUIRED:"Item is required",
  DESCRIPTION_REQUIRED:"Description is required",
  PRICE_REQUIRED:"Price is required",
  HSNCODE_REQUIRED:"HSN code is required",
  INTERNAL_SERVER_ERROR: 'Internal Server Error',
  LOCAL_NAME_REQUIRED:"Local name is required",
  ALREADY_EXIST: 'Already exists',
  VOUCHER_EXIST: 'Voucher exists',
  DATA_FETCHED: 'Data fetched.',
  DATA_NOT_FOUND: 'Data not found',
  DOES_NOT_EXIST:'Data does not exist',
  ID_REQUIRED: 'Id required',
  STATUS_REQUIRED: 'Status required',
  INVALID_VALUE: 'Invalid Value',
  CREATE_SUCCESS: 'Created successfully',
  DELETE_SUCCESS: 'Deleted successfully',
  UPDATE_SUCCESS: 'Updated successfully',
  GSTNUMBER_REQUIRED: 'GST number required',
  PANNUMBER_REQUIRED: 'PAN number required',
  STATE_REQUIRED: 'State required',
  CITY_REQUIRED: 'City required',
  PINCODE_REQUIRED: 'Pincode required',
  BANK_NAME_REQUIRED: 'Bank Name required',
  BANK_ACCOUNT_NO_REQUIRED: 'Bank Account NO required',
  EMAIL_REQUIRED: 'Email required',
  IFSC_REQUIRED: 'IFSC required',
  SITE_ID_REQUIRED: 'Site ID required',
  VENDOR_ID_REQUIRED: 'Vendor ID required',
  PURCHASEORDER_ID_REQUIRED: 'Purchase Order ID required',
  ADDRESS_REQUIRED: 'Address required',
  ADDRESS_REQUIRED1: 'Address1 required',
  ADDRESS_REQUIRED2: 'Address2 required',
  UNIT_PRICE_REQUIRED: 'Unit price required',
  UNIT_TYPE_REQUIRED: 'Unit type required',
  TAX_REQUIRED: 'Tax required',
  ITEMS_REQUIRED: 'Items required',
  DUE_DATE_REQUIRED: 'Due date required',
  CREATE_DATE_REQUIRED: 'Create date required',
  TOTAL_QUANTITY_REQUIRED: 'Total quantity required',
  APPROVE_SUCCESS: 'Approved Successfully',
  REJECT_SUCCESS: 'Rejected Successfully',
  PURCHASE_ORDER_COPIED: 'Order Copied Successfully',
  TRUCK_NUMBER_REQUIRED: 'Truck Number Required',
  TAX_INVOICE_REQUIRED: 'Tax Invoice Number Required',
  INVOICE_DATE_REQUIRED: 'Tax Invoice Date Required',
  TRUCK_FRONT_SIDE_REQUIRED: 'Truck Front Side Image Required',
  TRUCK_BACK_SIDE_REQUIRED: 'Truck Back Side Image Required',
  BEFORE_UNLOAD_IMAGE_REQUIRED: 'Before Unload Image Required',
  AFTER_UNLOAD_IMAGE_REQUIRED: 'After Unload Image Required',
  CHALLAN_FRONT_SIDE_IMAGE_REQUIRED: 'Challan Front Side Image Required',
  CHALLAN_BACK_SIDE_IMAGE_REQUIRED: 'Challan Back Side Image Required',
  INVOICE_FRONT_SIDE_REQUIRED: 'Invoice Front Side Image Required',
  INVOICE_BACK_SIDE_REQUIRED: 'Invoice Back Side Image Required',
  SIGNATURE_REQUIRED: 'signature Required',
  CHALLAN_ALREADY_CREATED: 'Challan Already Created',
  ALREADY_APPROVED : 'Already Approved',
  NOT_APPROVED : 'Not Approved',
  ALREADY_SUBMITTED : 'Already Submitted',
  FILE_REQUIRED : '"Please Provide File',
  FILE_UPLOADED : 'File Uploaded',
  FILE_UPLOAD_FAILED : 'File Upload Failed',
  SITE_UNAVAILABLE: 'Site Unavailable',
  ROLE_ID_REQUIRED: 'Role Id Required',
  FIRST_NAME_REQUIRED: 'First Name Required',
  LAST_NAME_REQUIRED: 'Last Name Required',
  SUCCESS: 'Success',
  INVALID_ROLE:"Invalid Role",
  REQUEST_UNAUTHORIZED:"Unauthorized Request",
  DOCUMENTS_REQUIRED:"Documents Array Required",
  MISSING_FIELDS:"Missing Fields",
  DUPLICATE_ENTRIES_FOUND:"Duplicate Entries Found",
  CHALLAN_ID_REQUIRED:"Challan Id Required",
  TYPE_REQUIRED:"Type Required",
  EXPENSE_TYPE_REQUIRED:"Expense Type Required",
  VENDOR_TYPE_REQUIRED:"Vendor Type Required",
  REQUIRED_NAME:"Name Required",
  REQUIRED:"Required",
  CHALLAN_NO_REQUIRED: 'Challan Number Required',
  AMOUNT_REQUIRED: 'Amount Required',
  CHEQUE_NO_REQUIRED: 'Cheque No Required',
  CHEQUE_DATE_REQUIRED: 'Cheque Date Required',
  CHALLAN_NOT_EXIST: 'Challan Does Not Exist',
  CHALLAN_PO_NOT_EXIST: 'Challan Or Purchase Order Does Not Exist',
  CHALLAN_PO_REQUIRED: 'Challan Or PO Number Required',
  UNIQUE_ITEM_ID: 'Unique Item Id Required',
  FAILED: 'Failed',
  VENDOR_ALREADY_EXIST_WITH_SAME_GST:'Vendor already Exist with Same GST',
  VENDOR_ALREADY_EXIST_WITH_SAME_PAN:'Vendor already Exist with Same PAN',
  VENDOR_ALREADY_EXIST:'Vendor already Exist',
  USER_NOT_ASSOCIATED_WITH_SITE: 'User is not Associated With Site',
  SITE_CHANGED_SUCCESS:"Site Changed Successfully",
  VOUCHER_AMOUNT_EXCEED:"The amount exceeds the site balance and therefore cannot be processed.",
  ARE_YOU_SURE_TO_SUBMIT:"Are you sure you want to Submit ?",
  EDIT_NOT_ALLOWED:"Changes Not Allowed", 
  SAVED_AS_DRAFT:"Saved As Draft",
  ROUND_OFF_AMOUNT_REQUIRED: 'roundOffAmount Required',
  TERMS_AND_CONDITIONS_REQUIRED: 'Terms & Condition Required',
  SAVED_AS_DRAFT:"Saved As Draft", 
  DOWNLOAD_FAILED:"Failed to Download",
  DATE_REQUIRED:"Date is required",
  REPORT_TYPE_REQUIRED:"Report type is required",
  ALREADY_EXIST_VOUCHER_AMOUNT: (originalAmount, totalAmount) => `PO/Challan was of ${formatPrice(originalAmount) || 0} and Vouchers of total amount of ${formatPrice(totalAmount) || 0} has already been made.  Are you sure you want to continue?`,
  STATE_REQUIRED:"State is required",
  SITE_BALANCE_NEGATIVE:"Site balance can not be negative",
};

exports.TermsAndConditionsArr = [
  {
    title: "Terms of Payment",
    description: "All payments for purchase orders must be made within 30 days from the date of invoice. Late payments may incur a penalty fee of 1.5% per month."
  },
  {
    title: "Order Confirmation",
    description: "Purchase orders must be confirmed by the supplier within 48 hours of receipt. Failure to confirm may result in the cancellation of the order."
  },
  {
    title: "Return Policy",
    description: "Items can be returned within 14 days of delivery if they are defective or do not meet the specifications outlined in the purchase order. A return authorization must be obtained from the supplier."
  },
  {
    title: "Dispute Resolution",
    description: "Any disputes arising from or in connection with the purchase order shall be resolved through amicable negotiations. If negotiations fail, disputes shall be settled by arbitration in accordance with the relevant arbitration laws."
  }
];
