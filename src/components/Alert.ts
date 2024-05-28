import Swal from "sweetalert2";
import DataService from "../features/Auth/dataService";
const dataService = DataService();
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "#6F47EB",
    cancelButton: "btn",
  },
  buttonsStyling: false,
});

 

export const fireAlert = (title: string, message: string, icon: any, url: any) => { 
  swalWithBootstrapButtons.fire({
    title: title,
    html: message,
    icon: icon,
    showCancelButton: false,
    confirmButtonText: "Okay",
    cancelButtonText: "Cancel"
}).then(function (result) {
    if (result.isConfirmed) {
      // Remove item from localStorage
      dataService.clearData()
      localStorage.removeItem('eezy-user-info');
        // Redirect the user
        window.location.href = url;
    }
});
 
};
 
