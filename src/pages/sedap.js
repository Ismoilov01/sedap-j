import React from "react";
import Sedap from "@/components/Sedap";
import Menu from "@/components/Menu";
import Users from "@/components/Users";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/sedap.css";

function sedap() {
  return (
    <>
      <div className="page">
        <Sedap />
        <Link href="http://localhost:3006/user">
          <Menu Image="/home.png" name="Dashboard" />
        </Link>
        <Menu img="/home.png" name="Order List" />
        <Menu img="/chiziqlar.png" width={10} height={10} alt="gfg" name="Order List" />
        <Menu img="/papka.png" width={10} height={10} alt="gfg" name="Order Detail" />
        <Menu img="/user.png" width={10} height={10} alt="gfg" name="Customer" />
        <Menu img="/analiz.png" width={10} height={10} alt="gfg" name="Analytics" />
        <Menu img="/qalam.png" width={10} height={10} alt="gfg" name="Reviews" />
        <Menu img="/coffe.png" width={10} height={10} alt="gfg" name="Foods" />
        <Menu img="/note.png" width={10} height={10} alt="gfg" name="Food Detail" />
        <Menu img="/user.png" width={10} height={10} alt="gfg" name="Customer Detail" />
        <Menu img="/calendar.png" width={10} height={10} alt="gfg" name="Calendar" />
        <Menu img="/chat.png" width={10} height={10} alt="gfg" name="Chat" />
        <Menu img="/wallet.png" width={10} height={10} alt="gfg" name="Wallet" />

        <img src="/banner.png"/>
        <h4 className="res">Sedap Restaurant Admin Dashboard</h4>
        <p className="ikki">© 2020 All Rights Reserved</p>
        <p className="made">Made with ❤️ by Peterdraw</p>
      </div>
      <div className="buts">
        <input className="search" type="text" placeholder="Search here" />
        <img className="logo" alt="gfg" src="/qongiroq.png"/>
        <img className="logo" alt="gfg" src="/com.png"/>
        <img className="logo" alt="gfg" src="/box.png"/>
        <img className="logo" alt="gfg" src="/setting.png"/>
        <h4 className="hello">Hello, Samantha</h4>
      </div>
      <div className="back">
        <h3 className="customer">Customer ID</h3>
        <img className="" src="/sort.png" width={10} height={10} alt="gfg" />

        <h3 className="customer">Join Date</h3>
        <img className="" src="/sort.png" width={10} height={10} alt="gfg" />

        <h3 className="customername">Customer Name</h3>
        <img className="" src="/sort.png" width={10} height={10} alt="gfg" />

        <h3 className="customer">Location</h3>
        <img className="" src="/sort.png" width={10} height={10} alt="gfg" />

        <h3 className="customername">Total Spent</h3>
        <img className="" src="/sort.png" width={10} height={10} alt="gfg" />
        <h3 className="customer">Last Order</h3>
        <img className="" src="/sort.png" width={10} height={10} alt="gfg" />
      </div>
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <div>
</div>
    </>
  );
}

export default sedap;
