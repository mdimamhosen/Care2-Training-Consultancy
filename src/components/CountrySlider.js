"use client";
import React, { useState, useRef, useEffect } from "react";

const images = [
  {
    flag: "https://plus.unsplash.com/premium_photo-1670552850918-d0d629b41f6c?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Ascension Island",
    code: "ac",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670689708319-c542c6c79b33?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Andorra",
    code: "ad",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865395931-20d6782b28f9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United Arab Emirates",
    code: "ae",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865393754-3c72283604ca?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Bangladesh",
    code: "bd",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591173482-ffb087662b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Brazil",
    code: "br",
  },
  {
    flag: "https://images.unsplash.com/photo-1498940585432-8adcc4d43a19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Canada",
    code: "ca",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United States",
    code: "us",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670552850918-d0d629b41f6c?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Ascension Island",
    code: "ac",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670689708319-c542c6c79b33?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Andorra",
    code: "ad",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865395931-20d6782b28f9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United Arab Emirates",
    code: "ae",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865393754-3c72283604ca?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Bangladesh",
    code: "bd",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591173482-ffb087662b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Brazil",
    code: "br",
  },
  {
    flag: "https://images.unsplash.com/photo-1498940585432-8adcc4d43a19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Canada",
    code: "ca",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United States",
    code: "us",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670552850918-d0d629b41f6c?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Ascension Island",
    code: "ac",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670689708319-c542c6c79b33?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Andorra",
    code: "ad",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865395931-20d6782b28f9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United Arab Emirates",
    code: "ae",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865393754-3c72283604ca?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Bangladesh",
    code: "bd",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591173482-ffb087662b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Brazil",
    code: "br",
  },
  {
    flag: "https://images.unsplash.com/photo-1498940585432-8adcc4d43a19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Canada",
    code: "ca",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United States",
    code: "us",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670552850918-d0d629b41f6c?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Ascension Island",
    code: "ac",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670689708319-c542c6c79b33?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Andorra",
    code: "ad",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865395931-20d6782b28f9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United Arab Emirates",
    code: "ae",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865393754-3c72283604ca?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Bangladesh",
    code: "bd",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591173482-ffb087662b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Brazil",
    code: "br",
  },
  {
    flag: "https://images.unsplash.com/photo-1498940585432-8adcc4d43a19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Canada",
    code: "ca",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United States",
    code: "us",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670552850918-d0d629b41f6c?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Ascension Island",
    code: "ac",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670689708319-c542c6c79b33?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Andorra",
    code: "ad",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865395931-20d6782b28f9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United Arab Emirates",
    code: "ae",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865393754-3c72283604ca?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Bangladesh",
    code: "bd",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591173482-ffb087662b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Brazil",
    code: "br",
  },
  {
    flag: "https://images.unsplash.com/photo-1498940585432-8adcc4d43a19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Canada",
    code: "ca",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United States",
    code: "us",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670552850918-d0d629b41f6c?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Ascension Island",
    code: "ac",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670689708319-c542c6c79b33?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Andorra",
    code: "ad",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865395931-20d6782b28f9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United Arab Emirates",
    code: "ae",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865393754-3c72283604ca?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Bangladesh",
    code: "bd",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591173482-ffb087662b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Brazil",
    code: "br",
  },
  {
    flag: "https://images.unsplash.com/photo-1498940585432-8adcc4d43a19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Canada",
    code: "ca",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United States",
    code: "us",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670552850918-d0d629b41f6c?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Ascension Island",
    code: "ac",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670689708319-c542c6c79b33?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Andorra",
    code: "ad",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865395931-20d6782b28f9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United Arab Emirates",
    code: "ae",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865393754-3c72283604ca?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Bangladesh",
    code: "bd",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591173482-ffb087662b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Brazil",
    code: "br",
  },
  {
    flag: "https://images.unsplash.com/photo-1498940585432-8adcc4d43a19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Canada",
    code: "ca",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United States",
    code: "us",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670552850918-d0d629b41f6c?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Ascension Island",
    code: "ac",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670689708319-c542c6c79b33?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Andorra",
    code: "ad",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865395931-20d6782b28f9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United Arab Emirates",
    code: "ae",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865393754-3c72283604ca?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Bangladesh",
    code: "bd",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591173482-ffb087662b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Brazil",
    code: "br",
  },
  {
    flag: "https://images.unsplash.com/photo-1498940585432-8adcc4d43a19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Canada",
    code: "ca",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United States",
    code: "us",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670552850918-d0d629b41f6c?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Ascension Island",
    code: "ac",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670689708319-c542c6c79b33?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Andorra",
    code: "ad",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865395931-20d6782b28f9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United Arab Emirates",
    code: "ae",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865393754-3c72283604ca?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Bangladesh",
    code: "bd",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591173482-ffb087662b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Brazil",
    code: "br",
  },
  {
    flag: "https://images.unsplash.com/photo-1498940585432-8adcc4d43a19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Canada",
    code: "ca",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United States",
    code: "us",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670552850918-d0d629b41f6c?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Ascension Island",
    code: "ac",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1670689708319-c542c6c79b33?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Andorra",
    code: "ad",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865395931-20d6782b28f9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United Arab Emirates",
    code: "ae",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1675865393754-3c72283604ca?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Bangladesh",
    code: "bd",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591173482-ffb087662b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Brazil",
    code: "br",
  },
  {
    flag: "https://images.unsplash.com/photo-1498940585432-8adcc4d43a19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Canada",
    code: "ca",
  },
  {
    flag: "https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "United States",
    code: "us",
  },
];

const FlagCarousel = () => {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef();

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.clientX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setDragging(false);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const x = e.clientX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 3; // multiplier for speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener("mousedown", handleMouseDown);
    carousel.addEventListener("mouseleave", handleMouseLeave);
    carousel.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("mousemove", handleMouseMove);

    return () => {
      carousel.removeEventListener("mousedown", handleMouseDown);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
      carousel.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dragging, startX, scrollLeft]);

  return (
    <div className="my-10 px-5 w-11/12 mx-auto overflow-hidden relative">
      <div className="text-center my-8">
        <h1 className="text-3xl md:text-5xl text-[#231F41] font-extrabold  tracking-wide leading-tight">
          We're In
        </h1>
        <p className="text-lg md:text-xl   mt-4">
          We are working with the following countries...
        </p>
      </div>

      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out overflow-x-scroll"
        style={{
          cursor: dragging ? "grabbing" : "grab",
        }}
      >
        {images.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-30 md:w-40 p-3 flex flex-col items-center mx-2"
          >
            <div className="relative w-24 h-24">
              <img
                src={item.flag}
                alt={item.country}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="mt-2">
              <p className="font-bold text-md">{item.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlagCarousel;
