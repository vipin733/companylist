import axios from "./axios";
import { Dispatch, SetStateAction } from "react";
import { CompanyType } from "./types";
import { _createCompany, _getCompany, _searchCompany } from "./baseurls";
import Router from "next/router";


export const handleSearch = async (search: string, setIsLoading: Dispatch<SetStateAction<boolean>>, setOptions: Dispatch<SetStateAction<CompanyType[]>>) => {
  try {
    setIsLoading(true);
    let url  = _searchCompany()
    let response = await axios.post(url, {search})
    let datas = response.data
    setOptions(datas)
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
  }
};


export const handleCreateCompany = async (company: CompanyType | undefined, setIsLoading: Dispatch<SetStateAction<boolean>>) => {
  try {
    if (!company) {
      return
    }
    setIsLoading(true);
    let url  = _createCompany()
    await axios.post(url, {...company})
    setIsLoading(false);
    Router.push("/companies")
  } catch (error) {
    setIsLoading(false);
    alert("server error , try again")
  }
};

export const handleViewsCompany = async (setCompanies: Dispatch<SetStateAction<CompanyType[]>>) => {
  try {
    let url  = _getCompany()    
    let response = await axios.post(url)
    setCompanies(response.data)
  } catch (error) {
    alert("server error , try again")
  }
};

export const filterCompanyData = (data: any) => {
  let datas: CompanyType[] = []
  try {
    let splits = data.split('<div class="show" align="left" id="')
    for (let index = 0; index < splits.length; index++) {
      let element = splits[index];
      if (element.indexOf("company/") > -1) {
        element = element.split('\">')
        if (element.length > 1) {
          element = element[0].split("/")
          let company: CompanyType = {
            name: element[1],
            cin: element[2],
            id: 0
          }
          datas.push(company)
        }
      }
    }
    return datas
  } catch (error) {
    return datas
  }
}