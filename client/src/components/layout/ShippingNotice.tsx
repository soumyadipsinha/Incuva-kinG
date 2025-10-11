export default function ShippingNotice() {
  return (
    <div className="w-full border-b bg-secondary/60 text-xs text-muted-foreground">
      <div className="relative overflow-hidden">
        <div className="flex w-[200%] animate-marquee">
          <div className="flex w-1/2 items-center justify-around px-4 py-2">
            <p>You are 100/- away from free shipping.</p>
            <p>You are 100/- away from free shipping.</p>
            <p>You are 100/- away from free shipping.</p>
            <p>You are 100/- away from free shipping.</p>
          </div>
          <div className="flex w-1/2 items-center justify-around px-4 py-2">
            <p>You are 100/- away from free shipping.</p>
            <p>You are 100/- away from free shipping.</p>
            <p>You are 100/- away from free shipping.</p>
            <p>You are 100/- away from free shipping.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
