

const NetworkConnetion = () => {


  document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    window.addEventListener("offline", () => {
      const online = document.getElementById("online");
      const offline = document.getElementById("offline");
      if (online && offline) {
        online.style.display = "none";
        offline.style.display = "block";
      }
    });

    window.addEventListener("online", () => {
      const online = document.getElementById("online");
      const offline = document.getElementById("offline");
      if (online && offline) {
        online.style.display = "block";
        offline.style.display = "none";
        setInterval(async () => {
          online.style.display = "none";
        }, 10000);
      }
    });
  });




  return (
    <div className="alert-container">
      <div className="alert success-alert" id="online">
        <h5 className="success-alert-text">
          Your device is connected to the internet.
        </h5>
      </div>

      <div className="alert  danger-alert" id="offline">
        <h5 className="success-alert-text">
          Your device lost its internet connection.
        </h5>
      </div>
    </div>
  );
};

export default NetworkConnetion;
