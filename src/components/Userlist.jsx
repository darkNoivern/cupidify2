import React from 'react';
import '../styles/userlist.css'
import { db } from "../firebase.config";
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useSelector } from "react-redux"; import {
    // collection,
    // onSnapshot,
    doc,
    setDoc,
    addDoc,
    deleteDoc,
    // query,
    serverTimestamp,
    // orderBy,
} from "firebase/firestore";

const Userlist = () => {

    const substituteData = useSelector(state => state);
    const email = substituteData.email;

    const [popup, setPopup] = useState(false);
    const [userlist, setUserlist] = useState([]);
    const [form, setForm] = useState({
        text: "",
        usermail: email,
        taggeduserid: "",
        taggeduser: "",
        taggedusermail: "",
        taggeduserprofile: "",
        taggedusercount: 0,
        taggeduserphoto: "",
    });

    const [list, setList] = useState(userlist);
    const [search, setSearch] = useState("");

    const usersCollectionRef = collection(db, "users");
    const chatsCollectionRef = collection(db, "chats");

    const sortRef = query(usersCollectionRef, orderBy("name"));
    useEffect(() => {
        onSnapshot(sortRef, (snapshot) => {
            setUserlist(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    };
                })
            );
            setList(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    };
                })
            );
        });
    }, []);


    const handleSubmit = () => {

        setPopup(false);
        addDoc(chatsCollectionRef, {
            ...form, createdAt: serverTimestamp()
        });
        console.log("submitted");
        // userlist.forEach((user) => {
        //     if (user.email === email) {
        //         console.log(user.email, user.count)
        //         // user.count = user.count+1;
        //         const updateOBJ = {
        //             name: user.name,
        //             email: user.email,
        //             count: user.count + 1,
        //         }
        //         setDoc(doc(db, 'users', user.id), updateOBJ)
        //         console.log(doc(db, 'users', user.id))
        //         console.log(user.email, user.count);
        //     }
        // })

        const updateOBJ = {
            name: form.taggeduser,
            email: form.taggedusermail,
            count: form.taggedusercount + 1,
            socialaccount: form.taggeduserprofile,
            photourl: form.taggeduserphoto,
        }
        setDoc(doc(db, 'users', form.taggeduserid), updateOBJ)
        resetForm();
    }

    useEffect(() => {
        if (search === "") {
            setList(userlist);
        }
        else {
            const newlist = userlist.filter((user) => {
                return (user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            })
            setList(newlist)
        }
        // console.log('list',list);
        // console.log('search',search);
    }, [search])

    const resetForm = () => {
        setForm({
            text: "",
            usermail: email,
            taggeduserid: "",
            taggeduser: "",
            taggedusermail: "",
            taggeduserprofile: "",
            taggedusercount: 0,
            taggeduserphoto: "",
        });
    };

    return (
        <>
            <div>
                <h1 className='m-0 py-4 text-valentine text-center'>
                    UserList
                </h1>
            </div>
            <div className='flexy m-3'>
                <input
                    placeholder='search user .....'
                    type="text"
                    value={search}
                    onChange={(event) => { setSearch(event.target.value) }}
                    className="form-control user-search-input bg-dark text-white mouserat" />
            </div>
            <div className='my-5'>
                <div className='row mx-0'>
                    {
                        list.length === 0 ? <>
                            <div className='col col-md-4 col-sm-6 col-12 p-3 text-white flexy'>
                                <div className="profile-card p-3">
                                    Sorry this user is not present ; Search something else
                                </div>
                            </div>
                        </> :
                            list.map((user, index) => {
                                return (
                                    <>
                                        <div key={index}
                                            className="col col-md-4 col-sm-6 col-12 p-3 mb-5 flexy">
                                            <>
                                                <div
                                                    onClick={(event) => {
                                                        if (user.email !== email) {
                                                            
                                                            const clist = event.target.classList
                                                            setPopup(!clist.contains('button'))

                                                            setForm({
                                                                ...form, taggeduserid: user.id,
                                                                taggeduser: user.name,
                                                                taggedusermail: user.email,
                                                                taggeduserprofile: user.socialaccount,
                                                                taggedusercount: user.count,
                                                                taggeduserphoto: user.photourl,
                                                            });
                                                        }
                                                    }}
                                                    className='profile-card p-3'>
                                                    <div className='flexy mb-3'>
                                                        <img src={user.photourl} alt="profile pic" className='userlist-profile-pic' />
                                                    </div>
                                                    <div className='flexy text-white mb-3'>{user.name}</div>
                                                    <div className='flexy'>
                                                        <a href={user.socialaccount} target="_blank" className="button ui mouserat text-white bg-valentine mx-0">Profile</a>
                                                    </div>
                                                </div>
                                            </>
                                        </div>
                                    </>
                                )
                            })
                    }
                </div>
            </div>

            {popup && (
                <div className="popup">
                    <div className="popup-inner bg-color60 p-4">
                        <h1 className="text-white">Send Your Dil ki Baat</h1>
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                            }}
                        >
                            <div className="form-group mb-3">
                                <label className="text-white mb-2">Text</label>
                                <textarea
                                    className="form-control bg-dark text-white"
                                    type="text"
                                    placeholder="Enter your secret ..."
                                    value={form.title}
                                    onChange={(event) => {
                                        setForm({ ...form, text: event.target.value });
                                    }}
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                {form.text === "" ?
                                    <button
                                        disabled
                                        onClick={() => {
                                            handleSubmit();
                                        }}
                                        className="ui button text-white bg-valentine round-corner mx-0"
                                    >
                                        Send
                                    </button> : <button
                                        onClick={() => {
                                            handleSubmit();
                                        }}
                                        className="ui button text-white bg-valentine round-corner mx-0"
                                    >
                                        Send
                                    </button>}
                                <button
                                    onClick={() => {
                                        resetForm();
                                        setPopup(false);
                                    }}
                                    className="button mx-0 ui bg-light text-valentine round-corner"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Userlist;
