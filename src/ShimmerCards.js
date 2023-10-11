// shimmer ui is showing user quickly fake layout of our app
// to make an pshycho logical effect that app is fast
export const ShimmerCards = () => {
  return [1, 2, 3, 4].map((item) => (
    <div key={item} className="res-card"></div>
  ));
};
