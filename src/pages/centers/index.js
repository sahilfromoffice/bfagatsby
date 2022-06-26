import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";

import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/react";

import TrainingCenter from "../../components/Cards/TrainingCenter";
import { ImLocation } from "@react-icons/all-files/im/ImLocation";
import { IoLogoWhatsapp } from "@react-icons/all-files/io/IoLogoWhatsapp";
import { IoCallSharp } from "@react-icons/all-files/io5/IoCallSharp";
import { BiRightArrow } from "@react-icons/all-files/bi/BiRightArrow";
import { BiLeftArrow } from "@react-icons/all-files/bi/BiLeftArrow";

import Modal from "../../components/Modal";
import CurvedPageHeading from "../../components/CurvedPageHeading";

const Centers = () => {
  // const {
  //   allContentfulCenters: { nodes: centers },
  //   allContentfulSports: { nodes: allSports },
  // } = useStaticQuery(query);
  const centers = [];
  const allSports = [];

  const [modal, setModal] = useState(null);

  const [filters, setFilters] = useState({
    searchInput: "",
    selectedSports: allSports.map((s) => s.id),
  });
  const [filteredCenters, setFilteredCenters] = useState([]);

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      selectedSports: allSports.map((s) => s.id),
    }));
  }, [allSports]);

  const handleShowDetails = (centerDetails, idx, evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    setModal({
      show: true,
      idx: idx,
      center: centerDetails,
    });
  };

  const handleClose = () =>
    setModal({
      show: false,
      center: null,
    });

  const modalLeftClick = () => {
    let newIdx = modal.idx === 0 ? centers.length - 1 : modal.idx - 1;
    setModal({
      show: true,
      idx: newIdx,
      center: centers[newIdx],
    });
  };

  const modalRightClick = () => {
    let newIdx = modal.idx === centers.length - 1 ? 0 : modal.idx + 1;
    setModal({
      show: true,
      idx: newIdx,
      center: centers[newIdx],
    });
  };

  const handleSearchInputChange = (e) => {
    setFilters((prev) => ({ ...prev, searchInput: e.target.value }));
  };

  const handleSelectFilterSports = (sportId) => {
    setFilters((prev) => ({
      ...prev,
      selectedSports:
        sportId === "All"
          ? allSports.map((s) => s.id)
          : sportId === "None"
          ? []
          : prev.selectedSports.includes(sportId)
          ? prev.selectedSports.filter((sid) => sid !== sportId)
          : [...prev.selectedSports, sportId],
    }));
  };

  useEffect(() => {
    setFilteredCenters(
      centers.filter((center) => {
        if (
          !filters.searchInput &&
          filters.selectedSports.length === allSports.length
        )
          return true;

        if (filters.searchInput) {
          const lowerSearchInput = filters.searchInput.toLowerCase();
          if (
            center.address.address.toLowerCase().includes(lowerSearchInput) ||
            center.name.toLowerCase().includes(lowerSearchInput)
          ) {
            if (filters.selectedSports.length > 0) {
              for (let i = 0; i < center.sports.length; i++) {
                if (filters.selectedSports.includes(center.sports[i]?.id)) {
                  return true;
                }
              }
            }
          }
        }

        if (!filters.searchInput) {
          if (filters.selectedSports.length > 0) {
            for (let i = 0; i < center.sports.length; i++) {
              if (filters.selectedSports.includes(center.sports[i]?.id)) {
                return true;
              }
            }
          }
        }
        return false;
      })
    );
  }, [centers, filters.searchInput, filters.selectedSports, allSports.length]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Centers | Baroda Football Academy </title>
        <link
          rel="canonical"
          href="http://www.barodafootballacademy.co.in/centers"
        />
      </Helmet>
      <CurvedPageHeading title=" Training Centers" />
      <div
        className="pt-6"
        style={{
          minHeight: "80vh",
          color: "white",
        }}
      >
        <CenterFilterBar
          allSports={allSports}
          handleSearchInputChange={handleSearchInputChange}
          handleSelectFilterSports={handleSelectFilterSports}
          filters={filters}
        />

        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {filteredCenters.map((c, idx) => {
            return (
              <TrainingCenter
                key={c.id}
                center={c}
                idx={idx}
                handleShowDetails={handleShowDetails}
              />
            );
          })}
        </ul>
      </div>

      <CenterDetailsModal
        modalLeftClick={modalLeftClick}
        modalRightClick={modalRightClick}
        modal={modal}
        handleClose={handleClose}
      />
    </>
  );
};

export default Centers;

const CenterDetailsModal = ({
  modal,
  handleClose,
  modalLeftClick,
  modalRightClick,
}) => {
  const centerData = modal?.center;
  return (
    <Modal
      Footer={() => (
        <div className="text-black">
          <NavModalBtn left onClick={modalLeftClick} />
          <NavModalBtn right onClick={modalRightClick} />

          <button onClick={handleClose}>Close</button>
        </div>
      )}
      title={centerData?.name}
      show={modal?.show}
      handleClose={handleClose}
    >
      <div
        style={{
          height: "400px",
          width: "800px",
        }}
        className="flex flex-col md:flex-row p-4 md:justify-center md:items-center max-w-full overflow-x-hidden"
      >
        <div className="flex flex-col justify-center items-center p-2">
          <div className="w-80 h-60 ">
            {centerData?.gMap?.gMap && (
              <iframe
                src={centerData?.gMap?.gMap}
                style={{
                  border: 0,
                  borderRadius: "5px",
                  height: "100%",
                  width: "100%",
                }}
                title={centerData?.name}
              ></iframe>
            )}
          </div>
          <p className=" flex items-center bg-slate-800 p-1 rounded-lg m-1 text-sm">
            <ImLocation size="2rem" color="red" />
            {centerData?.address?.address || ""}
          </p>
        </div>
        <div className="bg-slate-800 m-1 p-3 rounded-xl">
          <h4 className="text-lg font-bold ">Available Sports</h4>
          <ul className="flex flex-auto flex-wrap text-xs">
            {(centerData?.sports || []).map((s) => (
              <li
                style={{ margin: "4px 1.5px" }}
                className="flex items-center justify-center bg-slate-600 p-1 px-2 rounded-xl hover:bg-orange-700 cursor-pointer"
                key={s?.id}
              >
                {s?.name || ""}
              </li>
            ))}
          </ul>
          <h4 className="text-lg font-bold">Contact</h4>
          <ul className="flex flex-auto flex-wrap text-sm md:justify-start justify-center ">
            {(centerData?.contacts || []).map((contact) => (
              <li
                className="bg-slate-600 m-1 p-1 px-2 rounded-xl hover:bg-orange-700 cursor-pointer"
                key={contact?.id}
              >
                <span className="font-bold font-sans">{contact?.name}</span>
                <a
                  rel="noreferrer"
                  href={`tel:${contact?.whatsappNumber}`}
                  className="hover:text-slate-900 items-center flex text-sm p-1 px-2 hover:bg-white text-center rounded-2xl font-mono"
                >
                  <IoCallSharp className="mr-1" /> {contact?.phoneNumber}
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={`https://wa.me/${contact?.whatsappNumber}`}
                  className="hover:text-slate-900 flex items-center text-sm p-1 px-2 hover:bg-white text-center rounded-2xl font-mono"
                >
                  <IoLogoWhatsapp className="mr-1" />
                  {contact?.whatsappNumber}
                </a>
              </li>
            ))}
          </ul>
          <h4 className="text-lg font-bold">Batches</h4>
          <ul className="text-sm">
            {(centerData?.batches || []).map((batch) => (
              <li
                className="bg-slate-600 m-1 p-1 px-2 rounded-xl hover:bg-orange-700 cursor-pointer "
                key={batch?.id}
              >
                {batch?.displayText} {"|"} {batch?.timings}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

const NavModalBtn = ({ left, right, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button
      css={css`
        background: #fff;
      `}
      onClick={handleClick}
    >
      {left && <BiLeftArrow />}
      {right && <BiRightArrow />}
    </button>
  );
};

const AllSportsFilterOptions = ({
  allSports,
  handleSelectFilterSports,
  selectedSports,
}) => {
  return (
    <ul className="flex flex-auto flex-wrap text-xs items-center md:justify-start justify-center">
      {(allSports || []).map((s) => (
        <button
          style={{
            padding: "9px",

            marginRight: "5px",
          }}
          className={` flex items-center justify-center my-1 m-0 rounded-xl hover:bg-orange-600 cursor-pointer ${
            selectedSports.includes(s.id) ? "bg-orange-700" : "bg-slate-600"
          } `}
          key={s.id}
          onClick={() => handleSelectFilterSports(s.id)}
        >
          {s.name}
        </button>
      ))}

      {selectedSports.length !== allSports.length ? (
        <button
          style={{
            marginRight: "3px",
            fontSize: "0.7rem",
          }}
          className={` flex items-center justify-center rounded-md my-1 m-0 bg-sky-900 px-2 hover:bg-orange-700 cursor-pointer `}
          onClick={() => handleSelectFilterSports("All")}
        >
          Select All
        </button>
      ) : (
        <button
          style={{
            marginRight: "3px",
            fontSize: "0.7rem",
          }}
          className={` flex items-center justify-center rounded-md my-1 m-0 bg-sky-900 px-2 hover:bg-orange-700 cursor-pointer `}
          onClick={() => handleSelectFilterSports("None")}
        >
          Unselect All
        </button>
      )}
    </ul>
  );
};

const CenterFilterBar = ({
  allSports,
  handleSearchInputChange,
  handleSelectFilterSports,
  filters,
}) => {
  return (
    <div className="flex justify-end  m-3 p-3 bg-slate-800 rounded-xl md:flex-row flex-col-reverse  ">
      <AllSportsFilterOptions
        selectedSports={filters.selectedSports}
        handleSelectFilterSports={handleSelectFilterSports}
        allSports={allSports}
      />
      <input
        value={filters.searchInput}
        onChange={handleSearchInputChange}
        className="bg-slate-600 p-2 m-2  md:mb-2 mb-5 sm:w-3/12 outline-none rounded-md focus:ring-2 ring-orange-800"
        type="search"
        placeholder="Search"
      />
    </div>
  );
};

// const query = graphql`
//   {
//     allContentfulCenters {
//       nodes {
//         id
//         name
//         address {
//           address
//           id
//         }
//         batches {
//           id
//           name
//           timings
//           displayText
//         }
//         contacts {
//           id
//           name
//           phoneNumber
//           whatsappNumber
//         }
//         gMap {
//           gMap
//         }
//         sports {
//           id
//           name
//         }
//       }
//     }
//     allContentfulSports {
//       totalCount
//       nodes {
//         id
//         name
//       }
//     }
//   }
// `;
