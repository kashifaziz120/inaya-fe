import { commoditiesData, priceDrivers } from "@/pages/data/data";
import "./firstRow.css";
import { Grid, Card, CardContent, Typography, LinearProgress } from "@mui/material";
import TrendOverLastYear from "./trend_over_chart";

const FirstRow = () => {
  return (
    <div className="first-row">
      <Grid container spacing={3}>
        {/* Saved Commodities Section */}
        <Grid item xs={4}>
          <Card className="card card-styling saved-commodities">
            <CardContent>
              <Typography className="section-title">Saved Commodities</Typography>
              {commoditiesData.map((commodity) => (
                <div key={commodity.name} className="commodity-item">
                  <img
                    src={commodity.image}
                    alt={commodity.name}
                    className="commodity-image"
                  />
                  <div className="commodity-info">
                    <Typography className="commodity-name">{commodity.name}</Typography>
                    <LinearProgress
                      variant="determinate"
                      value={commodity.riskScore}
                      className="commodity-progress"
                    />
                  </div>
                  <Typography className="commodity-score">
                    {commodity.riskScore}%
                  </Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Trend Over Last Year Section */}
        <Grid item xs={4}>
          <Card className="card card-styling trend-chart">
            <CardContent>
              <Typography className="section-title">Trend Over Last Year</Typography>
              <TrendOverLastYear />
            </CardContent>
          </Card>
        </Grid>

        {/* Last Price Drivers Section */}
        <Grid item xs={4}>
          <Card className="card card-styling last-price-drivers">
            <CardContent>
              <Typography className="section-title">Last Price Drivers</Typography>
              <div className="price-drivers-list">
                {priceDrivers.map((driver, index) => (
                  <div key={index} className="price-driver-item">
                    <Typography className="driver-title">{driver.title}</Typography>
                    <Typography className="driver-description">
                      {driver.description}
                    </Typography>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default FirstRow;
