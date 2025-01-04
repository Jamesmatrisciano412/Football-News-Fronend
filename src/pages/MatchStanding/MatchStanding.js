import React, { useEffect } from "react";
import LandJoin from "../../compoents/LandJoin/LandJoin";
import MatchList from "../../compoents/MatchList/MatchList";
import api from "../../utils/api";

function MatchStanding() {
  const statement =
    "Welcome to the ultimate destination for football fans! <br/>Get instant access to the latest match results, live scores, and real-time updates—all in one place. Stay ahead with breaking news and exclusive insights into your favorite teams and players. <br/>Love football? Join thousands of fans who rely on us for their daily dose of action. Don’t miss a moment—bookmark us now and visit again soon!";

  useEffect(() => {
    api
      .get("/api/news/")
      .then((res) => {
        console.log(res, "this is response.");
      })
      .catch((err) => console.log(err, "this is error."));
  }, []);

  return (
    <div>
      <LandJoin statement={statement} linkButton={false} />
      <MatchList />
    </div>
  );
}

export default MatchStanding;
