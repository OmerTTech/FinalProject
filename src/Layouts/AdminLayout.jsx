import React from "react";
const AdminLayout = (props) => {
  return (
    <div className="row d-flex mx-0">
      <main className="col-9">{props.children}</main>
    </div>
  );
};

export default AdminLayout;
