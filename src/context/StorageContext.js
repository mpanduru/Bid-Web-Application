import { React, useEffect, useState } from "react";
import { useUploadFile } from 'react-firebase-hooks/storage';
import { getDownloadURL, ref, listAll } from 'firebase/storage'
import { storage } from "../firebase"
import { useDownloadURL } from "react-firebase-hooks/storage";

export async function StorageContext(path) {

    useEffect(() => {
        listAll(ref(storage, "")).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        });
    }, []);

};