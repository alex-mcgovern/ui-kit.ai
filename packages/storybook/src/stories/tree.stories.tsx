import type { Meta, StoryObj } from '@storybook/react'

import { Button, Tree, TreeItem, TreeItemContent } from '@ui-kit.ai/components'
import { InfoIcon } from 'lucide-react'

function SingleSelectionTemplate() {
    return (
        <Tree
            aria-label='Files (single selection)'
            defaultExpandedKeys={['documents', 'photos']}
            defaultSelectedKeys={['report']}
            selectionMode='single'
            style={{ width: '300px' }}
        >
            <TreeItem
                id='documents'
                textValue='Documents'
            >
                <TreeItemContent>Documents</TreeItemContent>
                <TreeItem
                    id='project'
                    textValue='Project'
                >
                    <TreeItemContent>Project</TreeItemContent>
                    <TreeItem
                        id='report'
                        textValue='Weekly Report'
                    >
                        <TreeItemContent>Weekly Report</TreeItemContent>
                    </TreeItem>
                </TreeItem>
            </TreeItem>
            <TreeItem
                id='photos'
                textValue='Photos'
            >
                <TreeItemContent>Photos</TreeItemContent>
                <TreeItem
                    id='one'
                    textValue='Image 1'
                >
                    <TreeItemContent>Image 1</TreeItemContent>
                </TreeItem>
                <TreeItem
                    id='two'
                    textValue='Image 2'
                >
                    <TreeItemContent>Image 2</TreeItemContent>
                </TreeItem>
            </TreeItem>
        </Tree>
    )
}

function TreeTemplate() {
    return (
        <Tree
            aria-label='Files'
            defaultExpandedKeys={['documents', 'photos', 'project']}
            defaultSelectedKeys={['photos']}
            selectionMode='multiple'
            style={{ height: '300px' }}
        >
            <TreeItem
                id='documents'
                textValue='Documents'
            >
                <TreeItemContent>
                    Documents
                    <Button
                        aria-label='Info'
                        className='ml-2'
                        isIcon
                    >
                        <InfoIcon size={16} />
                    </Button>
                </TreeItemContent>
                <TreeItem
                    id='project'
                    textValue='Project'
                >
                    <TreeItemContent>
                        Project
                        <Button
                            aria-label='Info'
                            className='ml-2'
                            isIcon
                        >
                            <InfoIcon size={16} />
                        </Button>
                    </TreeItemContent>
                    <TreeItem
                        id='report'
                        textValue='Weekly Report'
                    >
                        <TreeItemContent>
                            Weekly Report
                            <Button
                                aria-label='Info'
                                className='ml-2'
                                isIcon
                            >
                                <InfoIcon size={16} />
                            </Button>
                        </TreeItemContent>
                    </TreeItem>
                </TreeItem>
            </TreeItem>
            <TreeItem
                id='photos'
                textValue='Photos'
            >
                <TreeItemContent>
                    Photos
                    <Button
                        aria-label='Info'
                        className='ml-2'
                        isIcon
                    >
                        <InfoIcon size={16} />
                    </Button>
                </TreeItemContent>
                <TreeItem
                    id='one'
                    textValue='Image 1'
                >
                    <TreeItemContent>
                        Image 1
                        <Button
                            aria-label='Info'
                            className='ml-2'
                            isIcon
                        >
                            <InfoIcon size={16} />
                        </Button>
                    </TreeItemContent>
                </TreeItem>
                <TreeItem
                    id='two'
                    textValue='Image 2'
                >
                    <TreeItemContent>
                        Image 2
                        <Button
                            aria-label='Info'
                            className='ml-2'
                            isIcon
                        >
                            <InfoIcon size={16} />
                        </Button>
                    </TreeItemContent>
                </TreeItem>
            </TreeItem>
        </Tree>
    )
}

const meta = {
    component: Tree,
    render: TreeTemplate,
    title: 'Tree',
} satisfies Meta<typeof Tree>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default Tree component supports hierarchical data display with multiple selection.
 */
export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
}

/**
 * Trees can be configured to allow only a single selection at a time.
 */
export const SingleSelection: Story = {
    parameters: {
        displayName: 'Single Selection',
    },
    render: SingleSelectionTemplate,
}
