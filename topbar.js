document.addEventListener('DOMContentLoaded', function () {
  const topbarHTML = `
    <div id="topbar" style="
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      background-color: white;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      font-family: sans-serif;
      position: sticky;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: 1000;
      margin: 0;
    ">
      <div style="display: flex; align-items: center; gap: 30px;">
        <img src="public/logo.png" alt="Logo" style="height: 40px;" />
        <div style="display: flex; gap: 25px;">
            ${generateNavItem("Dashboard", "dashboard.svg", true)} <!-- Active -->
            ${generateNavItem("Users", "users.svg")}
            ${generateNavItem("Verify", "verify.svg")}
            ${generateNavItem("Enquiry", "queries.svg")}
            ${generateNavItem("Meetings", "meetings.svg")}
            ${generateNavItem("Queries", "queries.svg")}
            ${generateNavItem("Support", "support.svg")}
            ${generateNavItem("Projects", "projects.svg")}
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 20px;">
        <img src="public/images/icons/notification.svg" alt="Notifications" style="height: 22px; cursor: pointer;" title="Notifications" />
        <div style="position: relative;">
          <button id="userBtn" style="display: flex; align-items: center; background: none; border: 1px solid #eee; padding: 6px 12px; border-radius: 6px; cursor: pointer;">
            <img src="public/images/icons/user-icon.png" alt="User Avatar" style="border-radius: 50%; height: 20px; margin-right: 6px;" />
            <span style="color: #333; font-size: 13px;">Yeshwanth ▾</span>
          </button>
          <div id="userDropdown" style="display: none; position: absolute; right: 0; top: 40px; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 4px; overflow: hidden; z-index: 1000;">
            <a href="#" style="display: block; padding: 10px 20px; text-decoration: none; color: black; font-size: 14px;">Profile</a>
            <a href="#" style="display: block; padding: 10px 20px; text-decoration: none; color: black; font-size: 14px;">Logout</a>
          </div>
        </div>
      </div>
    </div>
  `;

  function generateNavItem(label, iconFile, isActive = false) {
  const color = isActive ? "#5ca941" : "#333";
  const underline = isActive
    ? `<div style="height: 2px; width: 100%; background-color: #5ca941; margin-top: 4px;"></div>`
    : `<div style="height: 2px; width: 100%; background-color: transparent; margin-top: 4px;"></div>`;

  const iconHeight = iconFile === "users.svg" ? "12px" : "16px";  // 👈 smaller size for users icon

  return `
    <div style="display: flex; flex-direction: column; align-items: center; cursor: pointer;">
      <div style="display: flex; align-items: center; gap: 6px; color: ${color}; font-weight: 500; font-size: 13px;">
        <img src="public/images/icons/${iconFile}" style="height: ${iconHeight}; filter: ${isActive ? 'none' : 'grayscale(100%)'};" />
        <span>${label}</span>
      </div>
      ${underline}
    </div>
  `;
}


  document.body.insertAdjacentHTML('afterbegin', topbarHTML);

  const userBtn = document.getElementById('userBtn');
  const userDropdown = document.getElementById('userDropdown');

  userBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function (event) {
    if (!userBtn.contains(event.target)) {
      userDropdown.style.display = 'none';
    }
  });
});
