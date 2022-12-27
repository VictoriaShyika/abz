import React, { useEffect, useState } from 'react';
import { Component } from './component';
import { useQuery } from 'react-query';
import { action } from './action';
import { MODULE_NAME } from './constant';
import axios from 'axios';

export const Container: React.FC<{
  users?: any;
  setUsers?: any;
  id?: string;
}> = ({ users, setUsers, id }) => {
  const preFetch = useQuery([MODULE_NAME], action);

  const isLoading = () => {
    if (preFetch.isLoading) {
      return true;
    }
  };

  const isSuccess = () => {
    if (preFetch.isSuccess) {
      return true;
    }
  };
  const [link, setLink] = useState();
  const [reloadedData, setReloadedData] = useState();
  const [reloadedUsers, setReloadedUsers] = useState();

  const getData: any = () => {
    const data = preFetch.data;

    if (data) {
      return data;
    }
  };

  useEffect(() => {
    if (getData()) {
      setLink(getData().links.next_url);
    }
  }, [getData()]);

  useEffect(() => {
    getData() && setUsers(getData().users);
    reloadedUsers && setUsers([...users, ...reloadedUsers]);
  }, [getData(), reloadedUsers]);

  const onClickHandler = () => {
    axios
      .get(link ? link : '')
      .then((res) => {
        console.log(res.data);
        setLink(res.data.links.next_url);
        setReloadedData(res.data);
        setReloadedUsers(res.data.users);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Component
      id={id}
      users={users}
      data={getData()}
      isLoading={isLoading()}
      isSuccess={isSuccess()}
      handleClick={onClickHandler}
      reloadedData={reloadedData}
      reloadedUsers={reloadedUsers}
    />
  );
};
