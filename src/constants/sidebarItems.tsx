"use client";
import React from "react";
import type { MenuProps } from "antd";
import { AppstoreOutlined, ProfileOutlined, TableOutlined } from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      icon:<TableOutlined/>,
      key: `/${role}/manage-student`,
    },
    {
      label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      icon:<TableOutlined/>,
      key: `/${role}/manage-faculty`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage academic",
      key: "manage-academic",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
          key: `/${role}/academic/faculty`,
        },
        {
          label: <Link href={`/${role}/academic/department`}>Departments</Link>,
          key: `/${role}/academic/department`,
        },
        {
          label: <Link href={`/${role}/academic/semester`}>Semesters</Link>,
          key: `/${role}/academic/semester`,
        },
      ],
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
        {
          label: <Link href={`/${role}/building`}>Building</Link>,
          key: `/${role}/building`,
        },
        {
          label: <Link href={`/${role}/room`}>Rooms</Link>,
          key: `/${role}/room`,
        },
        {
          label: <Link href={`/${role}/course`}>Course</Link>,
          key: `/${role}/course`,
        },
        {
          label: (
            <Link href={`/${role}/semester-registration`}>
              Semester registration
            </Link>
          ),
          key: `/${role}/semester-registration`,
        },
        {
          label: <Link href={`/${role}/offered-course`}>Offered courses</Link>,
          key: `/${role}/offered-course`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-section`}>
              Course sections
            </Link>
          ),
          key: `/${role}/offered-course-section`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-schedule`}>
              Course schedules
            </Link>
          ),
          key: `/${role}/offered-course-schedule`,
        },
      ],
    },
  ];

  if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else{
    return defaultSidebarItems;
  }
};

export default sidebarItems;
