export const DataAnalyticsBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Base Coffee Gradient - Cream to Cappuccino */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8E1] via-[#EFEBE9] to-[#D7CCC8]" />

            {/* Subtle Radial Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#D7CCC8]/20" />

            {/* Warm Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FFE0B2]/20 rounded-full blur-3xl" />
        </div>
    )
}
