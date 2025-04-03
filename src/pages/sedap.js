import React from "react";
import Sedap from "@/components/Sedap";
import Menu from "@/components/Menu";
import Users from "@/components/Users";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/sedap.module.css";

function sedap() {
  return (
    <>
      <div className="page">
        <Sedap />
        <Link className="link" href="http://localhost:3001/user">
          <Menu Image src="/home.png" name="Dashboard" />
        </Link>
        <Menu Image src="/chiziqlar.png" width={10} height={10} alt="gfg" name="Order List" />
        <Menu Image src="/papka.png" width={10} height={10} alt="gfg" name="Order Detail" />
        <Menu Image src="/user.png" width={10} height={10} alt="gfg" name="Customer" />
        <Menu Image src="/analiz.png" width={10} height={10} alt="gfg" name="Analytics" />
        <Menu Image src="/qalam.png" width={10} height={10} alt="gfg" name="Reviews" />
        <Menu Image src="/coffe.png" width={10} height={10} alt="gfg" name="Foods" />
        <Menu Image src="/note.png" width={10} height={10} alt="gfg" name="Food Detail" />
        <Menu Image src="/user.png" width={10} height={10} alt="gfg" name="Customer Detail" />
        <Menu Image src="/calendar.png" width={10} height={10} alt="gfg" name="Calendar" />
        <Menu Image src="/chat.png" width={10} height={10} alt="gfg" name="Chat" />
        <Menu Image src="/wallet.png" width={10} height={10} alt="gfg" name="Wallet" />

        <Image  width={10} height={10} alt="gfg" src="/banner.png"/>
        <h4 className="res">Sedap Restaurant Admin Dashboard</h4>
        <p className="ikki">© 2020 All Rights Reserved</p>
        <p className="made">Made with ❤️ by Peterdraw</p>
      </div>
      <div className="buts">
        <input className="search" type="text" placeholder="Search here" />
        <Image width={10} height={10} className="logo" alt="gfg" src="/qongiroq.png"/>
        <Image width={10} height={10} className="logo" alt="gfg" src="/com.png"/>
        <Image width={10} height={10} className="logo" alt="gfg" src="/box.png"/>
        <Image width={10} height={10} className="logo" alt="gfg" src="/setting.png"/>
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
      <div>
</div>
    </>
  );
}

export default sedap;
