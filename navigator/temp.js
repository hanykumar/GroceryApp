const CustomTabBarButton = ({ children, onPress }) => (
    <Button onPress={onPress} style={{
        width: 80,
        backgroundColor: 'green',
        position: 'relative'
    }}>
        <Box style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 50,
            backgroundColor: 'transparent',
            overflow: 'hidden'
        }}>
            <Box style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#ffffff', /* Set the same color as your background */
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
            }} />
            {children}
        </Box>
    </Button>
);