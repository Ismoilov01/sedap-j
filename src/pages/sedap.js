import React from "react";
import Sedap from "@/components/Sedap";
import Menu from "@/components/Menu";
import "@/styles/sedap.css";
import Users from "@/components/Users";
import Link from "next/link";
import Image from "next/image";

function sedap() {
  return (
    <>
      <div className="page">
        <Sedap />
        <Link href="http://localhost:3001/user">
          <Menu Image="/home.png" width={10} height={10} alt="gfg" name="Dashboard" />
        </Link>
        <Menu Image="/chiziqlar.png" width={10} height={10} alt="gfg" name="Order List" />
        <Menu Image="/papka.png" width={10} height={10} alt="gfg" name="Order Detail" />
        <Menu Image="/user.png" width={10} height={10} alt="gfg" name="Customer" />
        <Menu Image="/analiz.png" width={10} height={10} alt="gfg" name="Analytics" />
        <Menu Image="/qalam.png" width={10} height={10} alt="gfg" name="Reviews" />
        <Menu Image="/coffe.png" width={10} height={10} alt="gfg" name="Foods" />
        <Menu Image="/note.png" width={10} height={10} alt="gfg" name="Food Detail" />
        <Menu Image="/user.png" width={10} height={10} alt="gfg" name="Customer Detail" />
        <Menu Image="/calendar.png" width={10} height={10} alt="gfg" name="Calendar" />
        <Menu Image="/chat.png" width={10} height={10} alt="gfg" name="Chat" />
        <Menu Image="/wallet.png" width={10} height={10} alt="gfg" name="Wallet" />

        <Image src="/banner.png" width={10} height={10} alt="gfg"/>
        <h4 className="res">Sedap Restaurant Admin Dashboard</h4>
        <p className="ikki">© 2020 All Rights Reserved</p>
        <p className="made">Made with ❤️ by Peterdraw</p>
      </div>
      <div className="buts">
        <input className="search" type="text" placeholder="Search here" />
        <Image className="logo" width={10} height={10} alt="gfg" src="/qongiroq.png"/>
        <Image className="logo" width={10} height={10} alt="gfg" src="/com.png"/>
        <Image className="logo" width={10} height={10} alt="gfg" src="/box.png"/>
        <Image className="logo" width={10} height={10} alt="gfg" src="/setting.png"/>
        <h4 className="hello">Hello, Samantha</h4>
      </div>
      <div className="back">
        <h3 className="customer">Customer ID</h3>
        <Image className="" src="/sort.png" width={10} height={10} alt="gfg" />

        <h3 className="customer">Join Date</h3>
        <Image className="" src="/sort.png" width={10} height={10} alt="gfg" />

        <h3 className="customername">Customer Name</h3>
        <Image className="" src="/sort.png" width={10} height={10} alt="gfg" />

        <h3 className="customer">Location</h3>
        <Image className="" src="/sort.png" width={10} height={10} alt="gfg" />

        <h3 className="customername">Total Spent</h3>
        <Image className="" src="/sort.png" width={10} height={10} alt="gfg" />
        <h3 className="customer">Last Order</h3>
        <Image className="" src="/sort.png" width={10} height={10} alt="gfg" />
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
    </>
  );
}

export default sedap;
