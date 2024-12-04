"use client";

import styled from "./styled.module.css";

export function Snow() {
  const numbersWithIds = [
    { value: 217, ID: "f3eb9f9a-c1eb-4c5f-b1e7-8779d508fd9b" },
    { value: 53, ID: "a56c5ed5-98f7-4017-bae3-b540a0600a57" },
    { value: 12, ID: "b5f7a4b9-6a5d-488d-88da-33a1db9995d3" },
    { value: 145, ID: "68a7178f-5371-40b5-927d-0c9a9f93b01d" },
    { value: 234, ID: "07c1596b-759f-4f62-b9c2-598707b19f37" },
    { value: 311, ID: "06e6f47c-7466-4010-bcc9-b87dbb7a91f0" },
    { value: 19, ID: "9c6bc63a-ffad-4a99-bd53-7f7f508df070" },
    { value: 163, ID: "9609c9b0-d34e-4712-8190-14ed99b28b9f" },
    { value: 44, ID: "de8b8fd2-c533-4b77-98f9-689ce7e24fd3" },
    { value: 280, ID: "c8be1f91-833d-4c95-9a73-63ef67d12635" },
    { value: 120, ID: "df4d5cd9-b7fa-4c96-9a72-588d3148f7d0" },
    { value: 137, ID: "b64730da-d76a-4c56-9817-e4c88536a635" },
    { value: 299, ID: "c9f35f99-3320-4cc7-b86c-70f85a5de22c" },
    { value: 100, ID: "5159e02b-0999-469f-b25c-3f8bc0d78d73" },
    { value: 60, ID: "7f91cda4-e937-4606-95b4-03550cc6ec3a" },
    { value: 249, ID: "9eebd5d7-5f0e-46d0-b2a3-d773e0cd7296" },
    { value: 321, ID: "d6a18f6e-efc4-47d0-978b-bc8b39ec0735" },
    { value: 99, ID: "94bff9a9-885f-49ae-9221-b8d9c47c85ea" },
    { value: 64, ID: "df30d8ed-49c4-4ea7-85bc-1ed94c29d394" },
    { value: 230, ID: "41b6ab0a-5dbd-4667-bb19-1f1a4fc7b1eb" },
    { value: 135, ID: "6974e804-4b09-4b49-bc5f-d1bff7792eb4" },
    { value: 285, ID: "b83d80b1-2881-47e1-848a-3c6232a2720a" },
    { value: 309, ID: "cde31cc4-2b4a-4a5f-b8be-d6c5b49c9685" },
    { value: 324, ID: "f6c02c1e-99e9-4840-8cc1-15f6315a6435" },
    { value: 128, ID: "f1b1d3c3-0fa9-4f32-b2a2-8fc4f987dc9e" },
    { value: 191, ID: "2a6e0834-e89e-4c01-b899-ded7475f319f" },
    { value: 85, ID: "9c3b0e6e-4a87-45b4-8f3e-dbe4a073fd91" },
    { value: 293, ID: "1a08f3de-b365-485f-b255-e00e86f2a71f" },
    { value: 56, ID: "cc4b9df6-c0be-4920-85f1-b7670c3a7c25" },
    { value: 70, ID: "3d078c60-89e6-44a1-83ac-c5d27437c45c" },
    { value: 210, ID: "d53e3c31-3e6e-4fd3-a57f-fae9bfe15baf" },
    { value: 115, ID: "9d5d5e2e-c2e1-4ff5-a42d-cc2b219cf3f1" },
    { value: 308, ID: "fc6c8e76-5e99-41a7-86b2-ecf86567a79e" },
    { value: 273, ID: "1a899933-b1c5-442b-bd7f-bd9b5bca2f31" },
    { value: 244, ID: "f8fc2fe1-f59c-4281-b572-063b8036be33" },
    { value: 215, ID: "8d8b8ed6-71d5-42b9-9f6b-5010d3efb9a7" },
    { value: 154, ID: "57967ebf-d1d2-44c0-95ea-9ccf02c7f295" },
    { value: 1, ID: "a04f1b4d-dcb3-4acb-bdb5-b27a7ac34713" },
    { value: 132, ID: "9b071324-c74c-47e7-8c56-9d7b221705a1" },
    { value: 292, ID: "62a7f5c2-bd61-4b6f-b8b1-d2717175a1a0" },
    { value: 186, ID: "211e39b2-02fd-4a5a-bc0d-45f4067b18ab" },
    { value: 67, ID: "ccf69d2e-b519-4f5b-a1c1-f9e98fffc472" },
    { value: 168, ID: "9d64b61f-739a-4c85-8467-e0b66ae3d035" },
    { value: 195, ID: "a273dbb8-6a1c-48ed-80f1-0f87104f10ab" },
    { value: 242, ID: "f8ffcbfe-e658-48b3-bf56-b3beff9a25a4" },
    { value: 17, ID: "c3fa6222-c676-4065-a763-975ac7de38ca" },
    { value: 216, ID: "2c840b62-9e6a-4623-848e-c7d915a1a07c" },
    { value: 13, ID: "c063607e-41b7-48ba-8185-86958d4be87f" },
    { value: 30, ID: "d02c8a62-29cc-496b-9a3f-7131b242d5de" },
    { value: 90, ID: "57318949-1b28-4017-8a66-249d399f9903" },
    { value: 269, ID: "75f4a4f4-9bc1-4d59-b460-dccdb9d66347" },
    { value: 278, ID: "d3db9c40-0400-4b4c-b8f5-ecf0c5866172" },
    { value: 51, ID: "b8976c6c-5b9e-47e2-9f0a-cdf7d6b6f4d3" },
    { value: 334, ID: "d1a22099-b573-4e34-9e28-fc2b9255ab2f" },
    { value: 255, ID: "af63c6c7-fc32-4ec2-b69d-bda02f6a8e3c" },
    { value: 18, ID: "038ae78d-c9f5-433a-b451-c923ddff0b73" },
    { value: 103, ID: "fd33a8ae-1b13-451f-b9e3-2d3243c09c8d" },
    { value: 331, ID: "2287e2da-e580-4728-bd65-dab3cb9aeef3" },
    { value: 237, ID: "20457057-bbd6-4314-8540-429bfc2e442d" },
    { value: 147, ID: "8ab1d0c4-7ad6-474f-a028-0bfbf9c1397d" },
    { value: 337, ID: "c01adf74-5d3c-4287-a58e-b1e4e45d153e" },
    { value: 114, ID: "8f167cc4-6be3-43f2-8572-109b8a14528c" },
    { value: 35, ID: "712d8761-bfd5-453d-9067-8586c6d72a8c" },
    { value: 165, ID: "46da46b4-31d9-4a67-bdfd-f42f081cfc85" },
    { value: 93, ID: "c4a76ffb-9f76-47c9-a14b-7ca264cf5c6f" },
    { value: 73, ID: "ac273c1a-87e3-4c92-b99f-b0e5693471a9" },
    { value: 11, ID: "d7df9c12-e36b-452e-b54f-d39985e8ae9e" },
    { value: 166, ID: "7c9de1e7-f57a-44a9-938b-b28568214bb9" },
    { value: 178, ID: "56a5586e-290f-4042-8f10-70256b918566" },
    { value: 321, ID: "b7886b6e-f8e0-4302-bcc1-71b8648c57e4" },
    { value: 141, ID: "8bdf5d7b-fecf-4c6f-8696-04194a9bead0" },
    { value: 183, ID: "df85d819-8762-4d18-b57f-d496e5d97b88" },
    { value: 338, ID: "60c00490-bb75-4b60-9f87-8b62b4c23c1f" },
    { value: 32, ID: "d13de91c-40c2-423e-baf2-6819f87edbf0" },
    { value: 204, ID: "a013c1c4-c290-4899-9f24-e8b5992d8b09" },
    { value: 325, ID: "d1cc43fa-167d-48b2-8c6c-e7b34a30c941" },
    { value: 187, ID: "d1eb5644-b739-47a2-b5f4-7be898330f9f" },
    { value: 188, ID: "e0510c9a-17f8-4ff1-9a8c-f5f110da60cc" },
    { value: 293, ID: "5e10027d-d8b5-462b-9b8b-0eabf0dfd042" },
    { value: 262, ID: "5b9b50f8-ffb9-4311-b8e1-48a95d1b54b9" },
  ];

  return (
    <div className={styled.snow}>
      {numbersWithIds.map((index) => {
        const randomX = Math.random();
        const randomDuration = Math.random() + 0.5;
        const randomDelay = Math.random();
        return (
          <span
            key={index.ID}
            style={
              {
                "--random-x": randomX,
                "--random-duration": randomDuration,
                "--random-delay": randomDelay,
              } as React.CSSProperties
            }
          ></span>
        );
      })}
    </div>
  );
}
