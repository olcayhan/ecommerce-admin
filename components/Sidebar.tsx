"use client";

import { Button, Flex, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";

const Sidebar = () => {
  const sidebarItems = [
    {
      name: "Ana Sayfa",
      icon: "",
      href: "/",
    },
    {
      name: "Kategoriler",
      href: "/categories",
      icon: "",
    },
    {
      name: "Ürün Ekle",
      icon: "",
      href: "/add",
    },
  ];

  return (
    <Flex
      w={"300px"}
      h={"full"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
      py={3}
      bg={"blackAlpha.700"}
    >
      {sidebarItems.map((item, key) => {
        return (
          <Link
            key={key}
            href={item.href}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            fontSize={"lg"}
            fontWeight={"semibold"}
            bg={"whiteAlpha.800"}
            w={"full"}
            p={2}
            _hover={{ textDecoration: "none", bg: "whiteAlpha.700" }}
          >
            <Icon>{item.icon}</Icon>
            <Text>{item.name}</Text>
          </Link>
        );
      })}
    </Flex>
  );
};

export default Sidebar;
